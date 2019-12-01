from parser import Cryptogram
import operator

class Attack:
    
    def __init__(self, dataFile, length_test, amountTest):
        self.amountTest = amountTest
        self.length_test = length_test
        self.cryptograms = []
        self.dataFile = dataFile
        self.lettersFrequency = {
            'a': 89, 'e': 77, 'i': 82, 'o': 78, 'u': 25, 'y': 38,'z': 56, 'n': 55, 'r': 47, 'w': 47, 's': 43, 't': 40, 'c': 40, 
            'k': 35, 'd': 33, 'p': 31, 'm': 28,  'j': 23, 'l': 21, 'b': 15, 'g': 14, 'h': 11, 'f': 3, 'q': 1,
            'v': 1, 'x': 1, ' ': 100, ',': 16, '.': 15, '-': 15, '"': 15, '!': 15, '?': 15, ':': 15, ';': 15, '(': 15,
            ')': 15
        }
        for i in range(65, 91):
            self.lettersFrequency[chr(i)] = 15
        for i in range(48, 58):
            self.lettersFrequency[chr(i)] = 15
        self.decryptData()

    def lengthExperiment(self):
        length = 50
        longest = self.longest
        while(length < longest):
            self.longest = length
            self.key = self.findKey()   
            self.saveMsg(length,20)  
            length = length + 50

    def amountExperiment(self):
        for i in range(0,20):
            self.getCrypto(i)
            self.longest = self.findLongestCrypto()
            self.key = self.findKey()    # Finds the key for given cryptograms
            self.saveMsg(self.longest,i) # Decrypts the msg with found key and saves result to file
            self.cryptograms = []        # Prepare array for next experiment
            

    def decryptData(self):
        if(self.amountTest):
            self.amountExperiment()
            return
        else:
            self.getCrypto(19)            # Reads data from file
        self.longest = self.findLongestCrypto()
        if(self.length_test):             # Length experiment
            self.lengthExperiment()
        else:
            self.key = self.findKey()     # Finds the key for given cryptograms
            self.saveMsg(self.longest,19) # Decrypts the msg with found key and saves result to file

    def getCrypto(self,i):
        with open(self.dataFile, 'r') as file:
            counter = 0
            for line in file:
                if(counter > i):
                    break
                counter = counter+1
                self.cryptograms.append(Cryptogram(line))
                

    def saveMsg(self, length, amount):    
        saved_length = length
        fileName = "amount-"+str(amount)+"-msg"+".txt"
        with open(fileName, 'w') as file:
            for crypt in self.cryptograms:
                if not(self.length_test):
                    length = len(crypt.chars)
                else:
                    if(length > len(crypt.chars)):  # Removes problems with weird characters at the end when crypto is shorter than produced key
                        length = len(crypt.chars)
                    else:
                        length = saved_length
                for i in range(0, length):
                    file.write(chr(ord(crypt.get_chr(i)) ^ self.key[i]))
                file.write('\n')

    def findKey(self):
        key = []       
        
        for current_index in range(0, self.longest):
            possible_key = {}
            matching_cryptograms = self.findGoodCrypto(current_index)   # Cryptograms with length > current_index
            for crypt in matching_cryptograms:
                possible_key = self.findPossibleKey(crypt, current_index, possible_key) # XOR crypto with every letter in alphabet, returns array with results of xor
            tmp_sorted = sorted(possible_key.items(), key=operator.itemgetter(1), reverse=True) #Sorting array to improve the matching algorithm
            possible_key = dict(tmp_sorted) 
            best_possible = self.findBest(possible_key, matching_cryptograms, current_index) # Finds the best matching letter to current_index
            key.append(best_possible)
        return key

    def findLongestCrypto(self):
        longest = 0
        for crypt in self.cryptograms:
            if len(crypt.chars) > longest:
                longest = len(crypt.chars)
        return longest

    def findGoodCrypto(self, current_index):
        matching_cryptograms = []
        for crypt in self.cryptograms:
            if current_index < len(crypt.chars):
                matching_cryptograms.append(crypt)
        return matching_cryptograms

    def findPossibleKey(self,crypto, current_index, possible_key):
        for possible in self.lettersFrequency.keys():
            tmp = (ord(crypto.get_chr(current_index)) ^ ord(possible), self.lettersFrequency[possible])
            if tmp[0] not in possible_key.keys():
                possible_key[tmp[0]] = tmp[1]
            else:
                possible_key[tmp[0]] = possible_key.get(tmp[0]) + self.lettersFrequency.get(possible)
        return possible_key

    def findBest(self,possible_values, matching_crypto, currentIndex):
        best_possible = ord(' ')
        best_counter = 0
        for possible in possible_values.keys():
                counter = 0
                for crypt in matching_crypto:
                    if (chr(ord(crypt.get_chr(currentIndex)) ^ possible)) in self.lettersFrequency.keys():
                        counter += 1
                if counter > best_counter:
                    best_counter = counter
                    best_possible = possible
        return best_possible

    
