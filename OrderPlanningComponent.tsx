import React, { useState } from 'react'

interface SheetPlanInfo {
  sheetType: string
  boardsNeeded: number
  slatsPerBoard: number
  piecesPerSlat: number
  totalSlats: number
  totalPieces: number
  remainingDimension: number
}

interface PlanningData {
  orderId: string
  boxType: string
  quantity: number
  topBottomPlan: SheetPlanInfo
  longPlan: SheetPlanInfo
  smallPlan: SheetPlanInfo
  totalBoardsNeeded: number
}

export default function OrderPlanningComponent() {
  const [planningData, setPlanningData] = useState<PlanningData | null>(null)
  const [selectedSurface, setSelectedSurface] = useState<string | null>(null)
  const [images, setImages] = useState<Record<string, File>>({})

  // Mock data for demonstration
  React.useEffect(() => {
    const mockPlan: PlanningData = {
      orderId: 'ORD-001',
      boxType: 'Premium Box',
      quantity: 100,
      topBottomPlan: {
        sheetType: 'Top & Bottom',
        boardsNeeded: 100,
        slatsPerBoard: 5,
        piecesPerSlat: 2,
        totalSlats: 500,
        totalPieces: 1000,
        remainingDimension: 45,
      },
      longPlan: {
        sheetType: 'Long',
        boardsNeeded: 80,
        slatsPerBoard: 6,
        piecesPerSlat: 3,
        totalSlats: 480,
        totalPieces: 1440,
        remainingDimension: 30,
      },
      smallPlan: {
        sheetType: 'Small',
        boardsNeeded: 60,
        slatsPerBoard: 8,
        piecesPerSlat: 4,
        totalSlats: 480,
        totalPieces: 1920,
        remainingDimension: 20,
      },
      totalBoardsNeeded: 240,
    }
    setPlanningData(mockPlan)
  }, [])

  const surfaces = [
    { id: 'top-outer', label: 'Top - Outer Surface' },
    { id: 'top-inner', label: 'Top - Inner Surface' },
    { id: 'bottom-outer', label: 'Bottom - Outer Surface' },
    { id: 'bottom-inner', label: 'Bottom - Inner Surface' },
    { id: 'long-1', label: 'Long Sheet - Surface 1' },
    { id: 'long-2', label: 'Long Sheet - Surface 2' },
    { id: 'small-1', label: 'Small Sheet - Surface 1' },
    { id: 'small-2', label: 'Small Sheet - Surface 2' },
  ]

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, surfaceId: string) => {
    if (e.target.files?.[0]) {
      setImages(prev => ({
        ...prev,
        [surfaceId]: e.target.files![0],
      }))
    }
  }

  if (!planningData) {
    return <div className="text-center py-8">Loading planning data...</div>
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Production Planning</h1>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-gray-600">Order ID</p>
            <p className="text-lg font-semibold text-gray-900">{planningData.orderId}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Box Type</p>
            <p className="text-lg font-semibold text-gray-900">{planningData.boxType}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Quantity</p>
            <p className="text-lg font-semibold text-gray-900">{planningData.quantity} boxes</p>
          </div>
        </div>
      </div>

      {/* Cutting Plans Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <PlanCard plan={planningData.topBottomPlan} />
        <PlanCard plan={planningData.longPlan} />
        <PlanCard plan={planningData.smallPlan} />
      </div>

      {/* Total Boards Summary */}
      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Total Material Required</h3>
        <p className="text-3xl font-bold text-blue-600">{planningData.totalBoardsNeeded} boards</p>
      </div>

      {/* Surface Printing Configuration */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Configure Surface Printing</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {surfaces.map(surface => (
            <div key={surface.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900 mb-3">{surface.label}</h3>
              
              <div className="space-y-3">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    defaultChecked={false}
                    className="w-4 h-4 rounded border-gray-300"
                  />
                  <span className="text-sm text-gray-700">Requires printing</span>
                </label>

                {selectedSurface === surface.id && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload Design Image
                    </label>
                    <input
                      type="file"
                      accept="image/jpeg,image/png,application/pdf"
                      onChange={(e) => handleImageUpload(e, surface.id)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                    {images[surface.id] && (
                      <p className="text-sm text-green-600 mt-2">
                        ✓ {images[surface.id].name} uploaded
                      </p>
                    )}
                  </div>
                )}

                <button
                  onClick={() => setSelectedSurface(selectedSurface === surface.id ? null : surface.id)}
                  className="w-full text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  {selectedSurface === surface.id ? 'Collapse' : 'Add Design'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex gap-4 justify-end">
          <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
            Back
          </button>
          <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Confirm & Start Cutting
          </button>
        </div>
      </div>
    </div>
  )
}

function PlanCard({ plan }: { plan: SheetPlanInfo }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-bold text-gray-900 mb-4">{plan.sheetType}</h3>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Boards Needed:</span>
          <span className="font-semibold text-gray-900">{plan.boardsNeeded}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Slats/Board:</span>
          <span className="font-semibold text-gray-900">{plan.slatsPerBoard}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Pieces/Slat:</span>
          <span className="font-semibold text-gray-900">{plan.piecesPerSlat}</span>
        </div>
        <div className="border-t border-gray-200 pt-2 mt-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Total Slats:</span>
            <span className="font-semibold text-blue-600">{plan.totalSlats}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Total Pieces:</span>
            <span className="font-semibold text-blue-600">{plan.totalPieces}</span>
          </div>
        </div>
        <div className="text-xs text-gray-500 mt-2">
          Remaining: {plan.remainingDimension}mm
        </div>
      </div>
    </div>
  )
}
