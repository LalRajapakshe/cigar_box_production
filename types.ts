// Type definitions for the application

export interface BoxType {
  id: string
  name: string
  topSheetHeight: number
  topSheetWidth: number
}

export interface Order {
  id: string
  boxTypeId: string
  quantity: number
  orderDate: Date
  deliveryDate: Date
  sheetType: string
}
