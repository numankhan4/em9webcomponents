const cards: {
  id: number;
  key: string;
  name: string;
  regex: RegExp;
  predict: RegExp;
  maxLength: number;
  maskPattern: string;
}[] = [
  {
    id: 1,
    key: 'visa',
    name: 'Visa',
    regex: /^4(?:[0-9]{11}|[0-9]{14})[0-9]$/,
    predict: /^4[0-9]*$/,
    maxLength: 16,
    maskPattern: '9999 9999 9999 9999'
  },
  // {
  //   id: 31,
  //   name: 'Visa Debito',
  //   key: 'visadebito',
  //   regex: /^4(?:[0-9]{11}|[0-9]{14})[0-9]$/,
  //   predict: /^4[0-9]*$/,
  //   maxLength: 16,
  //   maskPattern: '9999 9999 9999 9999'
  // },
  {
    id: 15,
    name: 'Mastercard',
    key: 'mastercard',
    regex: /^5[1-5][0-9]{14}$/,
    predict: /^5[1-5][0-9]*$/,
    maxLength: 16,
    maskPattern: '9999 9999 9999 9999'
  },
  // {
  //   id: 66,
  //   name: 'Master Debit',
  //   key: 'masterdebit',
  //   regex: /^5[1-5][0-9]{14}$/,
  //   predict: /^5[1-5][0-9]*$/,
  //   maxLength: 16,
  //   maskPattern: '9999 9999 9999 9999'
  // },
  {
    id: 6,
    name: 'American Express',
    key: 'amex',
    regex: /^3[47][0-9]{13}$/,
    predict: /^3[47][0-9]*$/,
    maxLength: 15,
    maskPattern: '9999 999999 99999'
  },
  // {
  //   id: 65,
  //   name: 'American Express',
  //   key: 'amexmt',
  //   regex: /^3[47][0-9]{13}$/,
  //   predict: /^3[47][0-9]*$/,
  //   maxLength: 15,
  //   maskPattern: '9999 999999 99999'
  // },
  {
    id: 8,
    name: 'Diners Club',
    key: 'diners',
    regex: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    predict: /^3(?:0[0-5]|[68][0-9])[0-9]*/,
    maxLength: 14,
    maskPattern: '9999 999999 9999'
  },
  {
    id: 82,
    name: 'Discover',
    key: 'discover',
    regex: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    predict: /^6(?:011|5[0-9]{2})[0-9]*/,
    maxLength: 16,
    maskPattern: '9999 9999 9999 9999'
  },
  {
    id: 23,
    name: 'Tarjeta Shopping',
    key: 'tarjeta',
    regex: /^279[0-9]{3,}$/,
    predict: /^279[0-9]{3}[0-9]*/,
    maxLength: 15,
    maskPattern: '9999 9999 9999 9999'
  },
  {
    id: 23,
    name: 'Tarjeta Shopping',
    key: 'tarjeta',
    regex: /^606488[0-9]{0,}$/,
    predict: /^606488[0-9]{0,}/,
    maxLength: 15,
    maskPattern: '9999 9999 9999 9999'
  },
  {
    id: 56,
    name: 'Club Dia',
    key: 'clubdia',
    regex: /^636897[0-9]{0,}$/,
    predict: /^636897[0-9]{0,}/,
    maxLength: 15,
    maskPattern: '9999 9999 9999 9999'
  },
  {
    id: 57,
    name: 'Musicred',
    key: 'musicred',
    regex: /^636435[0-9]{0,}$/,
    predict: /^636435[0-9]{0,}/,
    maxLength: 15,
    maskPattern: '9999 9999 9999 9999'
  },
  {
    id: 27,
    name: 'Cabal',
    key: 'cabal',
    regex: /^589657[0-9]{0,}$/,
    predict: /^589657[0-9]{0,}/,
    maxLength: 15,
    maskPattern: '9999 9999 9999 9999'
  },
  {
    id: 43,
    name: 'Cencosud',
    key: 'cencosud',
    regex: /^603493[0-9]{0,}$/,
    predict: /^603493[0-9]{0,}/,
    maxLength: 15,
    maskPattern: '9999 9999 9999 9999'
  },
  {
    id: 38,
    name: 'Credimas',
    key: 'credimas',
    regex: /^504520[0-9]{0,}$/,
    predict: /^504520[0-9]{0,}/,
    maxLength: 15,
    maskPattern: '9999 9999 9999 9999'
  },
  {
    id: 44,
    name: 'Tarjeta Carrefour',
    key: 'carrefour',
    regex: /^(507858|585274)[0-9]{0,}$/,
    predict: /^(507858|585274)[0-9]{0,}/,
    maxLength: 15,
    maskPattern: '9999 9999 9999 9999'
  },
  {
    id: 54,
    name: 'Tarjeta grupar',
    key: 'grupar',
    regex: /^(605915)[0-9]{0,}$/,
    predict: /^(605915)[0-9]{0,}/,
    maxLength: 15,
    maskPattern: '9999 9999 9999 9999'
  },
  {
    id: 102,
    name: 'Tarjeta wishgift',
    key: 'wishgift',
    regex: /^(637046)[0-9]{0,}$/,
    predict: /^(637046)[0-9]{0,}/,
    maxLength: 15,
    maskPattern: '9999 9999 9999 9999'
  },
  {
    id: 103,
    name: 'JCB',
    key: 'jcb',
    regex: /^(?:2131|1800|35\d{3})\d{11}$/,
    predict: /^(?:2131|1800|35\d{3})\d{11}/,
    maxLength: 15,
    maskPattern: '9999 9999 9999 9999'
  },
  {
    id: 109,
    name: 'Maestro',
    key: 'maestro',
    regex: /^(5[06789]|6)[0-9]{0,}$/,
    predict: /^(5[06789]|6)[0-9]{0,}/,
    maxLength: 15,
    maskPattern: '9999 9999 9999 9999'
  },
  {
    id: 101,
    name: 'Unionpay',
    key: 'unionpay',
    regex: /^(62|88)\d+$/,
    predict: /^(62|88)\d+/,
    // max length 16 or 19
    maxLength: 16-19 ,
    maskPattern: '9999 9999 9999 9999'
  },
  {
    id: 1022,
    name: 'ELO',
    key: 'elo',
    regex: /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})$/,
    predict: /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})/,
    maxLength: 16 ,
    maskPattern: '9999 9999 9999 9999'
  },
  {
    id: 68,
    name: 'HIPERCARD',
    key: 'hipercard',
    regex: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/,
    predict: /^(606282\d{10}(\d{3})?)|(3841\d{15})/,
    maxLength: 16 ,
    maskPattern: '9999 9999 9999 9999'
  },
  {
    id: 68,
    name: 'MIR',
    key: 'mir',
    regex: /^(?:220[0-4])\d+$/,
    predict: /^(?:220[0-4])\d+/,
    maxLength: 16 ,
    maskPattern: '9999 9999 9999 9999'
  }
];

export default cards;
