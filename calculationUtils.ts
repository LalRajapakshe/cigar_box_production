// API utilities for order calculations

export interface CuttingLossConfig {
  cuttingLossMm: number // 1mm per cut
}

export interface BoardDimensions {
  height: number
  width: number
}

export interface SheetDimensions {
  height: number
  width: number
}

export interface CalculatedPlan {
  totalPiecesNeeded: number
  piecesPerSlat: number
  slatsPerBoard: number
  piecesPerBoard: number
  boardsNeeded: number
  totalSlats: number
  totalPieces: number
  remainingBoardDimension: number
}

/**
 * Calculate cutting plan for a specific sheet type
 * Accounts for 1mm cutting loss per cut
 */
export function calculateSheetPlan(
  orderQuantity: number,
  piecesPerBox: number,
  boardDimensions: BoardDimensions,
  sheetDimensions: SheetDimensions,
  cuttingLoss: number = 1
): CalculatedPlan {
  const totalPiecesNeeded = orderQuantity * piecesPerBox

  // Calculate pieces per slat (width direction)
  // Account for cuts between pieces
  const widthCuts = Math.floor(boardDimensions.width / sheetDimensions.width)
  const usableWidth = boardDimensions.width - (widthCuts * cuttingLoss)
  const piecesPerSlat = Math.floor(usableWidth / sheetDimensions.width)

  // Calculate slats per board (height direction)
  // Account for cuts between slats
  const heightCuts = Math.floor(boardDimensions.height / sheetDimensions.height)
  const usableHeight = boardDimensions.height - (heightCuts * cuttingLoss)
  const slatsPerBoard = Math.floor(usableHeight / sheetDimensions.height)

  const piecesPerBoard = piecesPerSlat * slatsPerBoard
  const boardsNeeded = Math.ceil(totalPiecesNeeded / piecesPerBoard)

  const totalSlats = boardsNeeded * slatsPerBoard
  const totalPieces = totalSlats * piecesPerSlat

  const remainingBoardDimension =
    boardDimensions.height - (slatsPerBoard * (sheetDimensions.height + cuttingLoss))

  return {
    totalPiecesNeeded,
    piecesPerSlat,
    slatsPerBoard,
    piecesPerBoard,
    boardsNeeded,
    totalSlats,
    totalPieces,
    remainingBoardDimension,
  }
}

/**
 * Calculate complete production plan for an order
 */
export function calculateOrderPlan(
  orderQuantity: number,
  boardDimensions: BoardDimensions,
  topBottomSheetDimensions: SheetDimensions,
  longSheetDimensions: SheetDimensions,
  smallSheetDimensions: SheetDimensions,
  cuttingLoss: number = 1
) {
  const topBottomPlan = calculateSheetPlan(
    orderQuantity,
    2, // 1 top + 1 bottom per box
    boardDimensions,
    topBottomSheetDimensions,
    cuttingLoss
  )

  const longPlan = calculateSheetPlan(
    orderQuantity,
    2, // 2 long sheets per box
    boardDimensions,
    longSheetDimensions,
    cuttingLoss
  )

  const smallPlan = calculateSheetPlan(
    orderQuantity,
    2, // 2 small sheets per box
    boardDimensions,
    smallSheetDimensions,
    cuttingLoss
  )

  return {
    topBottomPlan,
    longPlan,
    smallPlan,
    totalBoardsNeeded:
      topBottomPlan.boardsNeeded +
      longPlan.boardsNeeded +
      smallPlan.boardsNeeded,
  }
}
