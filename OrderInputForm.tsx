import React, { useState } from 'react'

interface OrderFormData {
  boxTypeId: string
  quantity: number
  orderDate: string
  deliveryDate: string
  sheetType: string
}

export default function OrderInputForm() {
  const [formData, setFormData] = useState<OrderFormData>({
    boxTypeId: '',
    quantity: 1,
    orderDate: new Date().toISOString().split('T')[0],
    deliveryDate: '',
    sheetType: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'quantity' ? parseInt(value) : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Order submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Create New Order</h2>

      {submitted && (
        <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
          Order submitted successfully! Redirecting to planning...
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Box Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Box Type <span className="text-red-600">*</span>
          </label>
          <select
            name="boxTypeId"
            value={formData.boxTypeId}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select a box type...</option>
            <option value="box-001">Standard Box (10x10x5)</option>
            <option value="box-002">Premium Box (12x12x6)</option>
            <option value="box-003">Luxury Box (15x15x7)</option>
          </select>
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Quantity (boxes) <span className="text-red-600">*</span>
          </label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="1"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Order Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Order Date <span className="text-red-600">*</span>
          </label>
          <input
            type="date"
            name="orderDate"
            value={formData.orderDate}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Delivery Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Delivery Date <span className="text-red-600">*</span>
          </label>
          <input
            type="date"
            name="deliveryDate"
            value={formData.deliveryDate}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Sheet Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sheet Type <span className="text-red-600">*</span>
          </label>
          <select
            name="sheetType"
            value={formData.sheetType}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select a sheet type...</option>
            <option value="cedar">Cedar Wood</option>
            <option value="mahogany">Mahogany</option>
            <option value="spanish-cedar">Spanish Cedar</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition"
        >
          Proceed to Planning
        </button>
      </form>
    </div>
  )
}
