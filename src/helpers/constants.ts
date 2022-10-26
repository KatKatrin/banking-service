export enum CalculationMode {
  DIFFERENTIATED = 'DIFFERENTIATED',
  ANNUITY = 'ANNUITY',
}

export enum CardStatus {
  BLOCKED = 'BLOCKED',
  ACTIVE = 'ACTIVE',
  EXPIRED = 'EXPIRED',
}

export enum OrderStatus {
  PENDING = 'PENDING',
  REJECTED = 'REJECTED',
  INDIVIDUAL_CONDITIONS = 'INDIVIDUAL_CONDITIONS',
}

export enum ErrorMessage {
  INCORRECT_ID = 'incorrect user id',
  INCORRECT_QUERY_PARAMS = 'incorrect value or variable of query params',
  NOT_FOUND_CARDS = 'Not found credit cards',
  NOT_FOUND_CARD = 'Not found credit card by id',
  NOT_FOUND_CREDITS = 'Not found credits by clientID',
  NOT_FOUND_CREDIT_INFO = 'Not found credit info by creditID',
  NOT_FOUND_SCHEDULES = 'Not found schedules by creditID',
  NOT_FOUND_ACTIVE_CREDIT = 'Not found active credit/credits'
}