var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://127.0.0.1:8000/transaction_new/', 'dir': '_m0/0', 'linked': 2, 'len': 3533 },
    { 'url': 'http://127.0.0.1:8000/login/', 'dir': '_m0/1', 'linked': 5, 'len': 3847 },
    { 'url': 'http://127.0.0.1:8000/logout/', 'dir': '_m0/2', 'linked': 2, 'len': 2155 },
    { 'url': 'http://127.0.0.1:8000/password-reset/', 'dir': '_m0/3', 'linked': 5, 'len': 3261 },
    { 'url': 'http://127.0.0.1:8000/password-reset/', 'dir': '_m0/4', 'linked': 2, 'len': 2779 },
    { 'url': 'http://127.0.0.1:8000/register/', 'dir': '_m0/5', 'linked': 5, 'len': 4922 },
    { 'url': 'http://127.0.0.1:8000/register/', 'dir': '_m0/6', 'linked': 5, 'len': 161048 },
    { 'url': 'http://127.0.0.1:8000/transaction_history/', 'dir': '_m0/7', 'linked': 2, 'len': 3690 },
    { 'url': 'http://127.0.0.1:8000/transaction_new/', 'dir': '_m0/8', 'linked': 0, 'len': 2546 } ]
  }
];

var issue_samples = [
  { 'severity': 3, 'type': 40501, 'samples': [
    { 'url': 'http://127.0.0.1:8000/register/', 'extra': 'responses for ./val and .../val look different', 'sid': '0', 'dir': '_i0/0' } ]
  },
  { 'severity': 3, 'type': 40201, 'samples': [
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css', 'sid': '0', 'dir': '_i1/0' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': 'https://code.jquery.com/jquery-3.2.1.slim.min.js', 'sid': '0', 'dir': '_i1/1' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', 'sid': '0', 'dir': '_i1/2' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js', 'sid': '0', 'dir': '_i1/3' },
    { 'url': 'http://127.0.0.1:8000/login/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css', 'sid': '0', 'dir': '_i1/4' },
    { 'url': 'http://127.0.0.1:8000/login/', 'extra': 'https://code.jquery.com/jquery-3.2.1.slim.min.js', 'sid': '0', 'dir': '_i1/5' },
    { 'url': 'http://127.0.0.1:8000/login/', 'extra': 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', 'sid': '0', 'dir': '_i1/6' },
    { 'url': 'http://127.0.0.1:8000/login/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js', 'sid': '0', 'dir': '_i1/7' },
    { 'url': 'http://127.0.0.1:8000/logout/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css', 'sid': '0', 'dir': '_i1/8' },
    { 'url': 'http://127.0.0.1:8000/logout/', 'extra': 'https://code.jquery.com/jquery-3.2.1.slim.min.js', 'sid': '0', 'dir': '_i1/9' },
    { 'url': 'http://127.0.0.1:8000/logout/', 'extra': 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', 'sid': '0', 'dir': '_i1/10' },
    { 'url': 'http://127.0.0.1:8000/logout/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js', 'sid': '0', 'dir': '_i1/11' },
    { 'url': 'http://127.0.0.1:8000/password-reset/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css', 'sid': '0', 'dir': '_i1/12' },
    { 'url': 'http://127.0.0.1:8000/password-reset/', 'extra': 'https://code.jquery.com/jquery-3.2.1.slim.min.js', 'sid': '0', 'dir': '_i1/13' },
    { 'url': 'http://127.0.0.1:8000/password-reset/', 'extra': 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', 'sid': '0', 'dir': '_i1/14' },
    { 'url': 'http://127.0.0.1:8000/password-reset/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js', 'sid': '0', 'dir': '_i1/15' },
    { 'url': 'http://127.0.0.1:8000/password-reset/done', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css', 'sid': '0', 'dir': '_i1/16' },
    { 'url': 'http://127.0.0.1:8000/password-reset/done', 'extra': 'https://code.jquery.com/jquery-3.2.1.slim.min.js', 'sid': '0', 'dir': '_i1/17' },
    { 'url': 'http://127.0.0.1:8000/password-reset/done', 'extra': 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', 'sid': '0', 'dir': '_i1/18' },
    { 'url': 'http://127.0.0.1:8000/password-reset/done', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js', 'sid': '0', 'dir': '_i1/19' },
    { 'url': 'http://127.0.0.1:8000/password-reset/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css', 'sid': '0', 'dir': '_i1/20' },
    { 'url': 'http://127.0.0.1:8000/password-reset/', 'extra': 'https://code.jquery.com/jquery-3.2.1.slim.min.js', 'sid': '0', 'dir': '_i1/21' },
    { 'url': 'http://127.0.0.1:8000/password-reset/', 'extra': 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', 'sid': '0', 'dir': '_i1/22' },
    { 'url': 'http://127.0.0.1:8000/password-reset/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js', 'sid': '0', 'dir': '_i1/23' },
    { 'url': 'http://127.0.0.1:8000/register/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css', 'sid': '0', 'dir': '_i1/24' },
    { 'url': 'http://127.0.0.1:8000/register/', 'extra': 'https://code.jquery.com/jquery-3.2.1.slim.min.js', 'sid': '0', 'dir': '_i1/25' },
    { 'url': 'http://127.0.0.1:8000/register/', 'extra': 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', 'sid': '0', 'dir': '_i1/26' },
    { 'url': 'http://127.0.0.1:8000/register/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js', 'sid': '0', 'dir': '_i1/27' },
    { 'url': 'http://127.0.0.1:8000/register/', 'extra': 'http://dpaste.com/', 'sid': '0', 'dir': '_i1/28' },
    { 'url': 'http://127.0.0.1:8000/transaction_history/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css', 'sid': '0', 'dir': '_i1/29' },
    { 'url': 'http://127.0.0.1:8000/transaction_history/', 'extra': 'https://code.jquery.com/jquery-3.2.1.slim.min.js', 'sid': '0', 'dir': '_i1/30' },
    { 'url': 'http://127.0.0.1:8000/transaction_history/', 'extra': 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', 'sid': '0', 'dir': '_i1/31' },
    { 'url': 'http://127.0.0.1:8000/transaction_history/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js', 'sid': '0', 'dir': '_i1/32' },
    { 'url': 'http://127.0.0.1:8000/transaction_new/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css', 'sid': '0', 'dir': '_i1/33' },
    { 'url': 'http://127.0.0.1:8000/transaction_new/', 'extra': 'https://code.jquery.com/jquery-3.2.1.slim.min.js', 'sid': '0', 'dir': '_i1/34' },
    { 'url': 'http://127.0.0.1:8000/transaction_new/', 'extra': 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', 'sid': '0', 'dir': '_i1/35' },
    { 'url': 'http://127.0.0.1:8000/transaction_new/', 'extra': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js', 'sid': '0', 'dir': '_i1/36' } ]
  },
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://127.0.0.1:8000/password-reset/', 'extra': '', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'http://127.0.0.1:8000/password-reset/', 'extra': '', 'sid': '0', 'dir': '_i2/1' },
    { 'url': 'http://127.0.0.1:8000/transaction_new/', 'extra': '', 'sid': '0', 'dir': '_i2/2' } ]
  },
  { 'severity': 1, 'type': 20205, 'samples': [
    { 'url': 'http://127.0.0.1:8000/password-reset/', 'extra': '', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://127.0.0.1:8000/transaction_history/', 'extra': '', 'sid': '0', 'dir': '_i3/1' },
    { 'url': 'http://127.0.0.1:8000/transaction_new/', 'extra': '', 'sid': '0', 'dir': '_i3/2' } ]
  },
  { 'severity': 0, 'type': 10602, 'samples': [
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': '', 'sid': '0', 'dir': '_i4/0' },
    { 'url': 'http://127.0.0.1:8000/login/', 'extra': '', 'sid': '0', 'dir': '_i4/1' },
    { 'url': 'http://127.0.0.1:8000/register/', 'extra': '', 'sid': '0', 'dir': '_i4/2' } ]
  },
  { 'severity': 0, 'type': 10505, 'samples': [
    { 'url': 'http://127.0.0.1:8000/transaction_new/', 'extra': 'to', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'http://127.0.0.1:8000/transaction_new/', 'extra': 'value', 'sid': '0', 'dir': '_i5/1' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://127.0.0.1:8000/transaction_new/', 'extra': '', 'sid': '0', 'dir': '_i6/0' } ]
  },
  { 'severity': 0, 'type': 10403, 'samples': [
    { 'url': 'http://127.0.0.1:8000/register/', 'extra': '', 'sid': '0', 'dir': '_i7/0' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://127.0.0.1:8000/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/0' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/1' } ]
  },
  { 'severity': 0, 'type': 10204, 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i9/0' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'WSGIServer/0.2 CPython/3.6.9', 'sid': '0', 'dir': '_i10/0' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': 'sessionid', 'sid': '0', 'dir': '_i11/0' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/?next=9876sfi', 'extra': 'sessionid', 'sid': '0', 'dir': '_i11/1' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': 'sessionid', 'sid': '0', 'dir': '_i11/2' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': 'sessionid', 'sid': '0', 'dir': '_i11/3' },
    { 'url': 'http://127.0.0.1:8000/logout/', 'extra': 'sessionid', 'sid': '0', 'dir': '_i11/4' } ]
  }
];

