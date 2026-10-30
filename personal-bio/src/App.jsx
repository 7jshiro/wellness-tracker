import { useState } from 'react'

export default function App() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    sleep: '',
    water: '',
  })

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((previousData) => ({ ...previousData, [name]: value }))
  }

  function handleNext() {
    if (step === 1) {
      if (!formData.name.trim() || !formData.age) {
        alert('Please enter your name and age.')
        return
      }
      if (Number(formData.age) < 1 || Number(formData.age) > 120) {
        alert('Please enter a valid age between 1 and 120.')
        return
      }
    }

    if (step === 2) {
      if (formData.sleep === '' || formData.water === '') {
        alert('Please enter your hours of sleep and glasses of water.')
        return
      }
      if (
        Number(formData.sleep) < 0 ||
        Number(formData.sleep) > 24 ||
        Number(formData.water) < 0
      ) {
        alert('Please enter valid wellness values.')
        return
      }
    }

    setStep((previousStep) => previousStep + 1)
  }

  function handleBack() {
    setStep((previousStep) => previousStep - 1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 px-4 py-10 sm:py-16">
      <div className="mx-auto max-w-lg rounded-2xl bg-white p-6 shadow-xl sm:p-10">
        <div className="mb-8 text-center">
          <div className="mb-3 text-4xl">🌿</div>
          <h1 className="text-3xl font-bold text-teal-800">Wellness Tracker</h1>
          <p className="mt-2 text-sm text-gray-600">
            Take a moment to check in with yourself.
          </p>
        </div>

        <div className="mb-8">
          <div className="mb-2 flex justify-between text-sm font-medium text-gray-600">
            <span>
              {step === 1
                ? 'Step 1: Personal Details'
                : step === 2
                  ? 'Step 2: Wellness Details'
                  : 'Your Summary'}
            </span>
            <span>{step}/3</span>
          </div>
          <div className="h-2 w-full rounded-full bg-gray-200">
            <div
              className={`h-2 rounded-full bg-teal-600 transition-all duration-300 ${
                step === 1 ? 'w-1/3' : step === 2 ? 'w-2/3' : 'w-full'
              }`}
            />
          </div>
        </div>

        {step === 1 && (
          <div>
            <h2 className="mb-5 text-xl font-semibold text-gray-800">
              Tell us about yourself
            </h2>
            <div className="mb-5">
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                Your name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-200"
              />
            </div>
            <div className="mb-8">
              <label htmlFor="age" className="mb-2 block text-sm font-medium text-gray-700">
                Your age
              </label>
              <input
                id="age"
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter your age"
                min="1"
                max="120"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-200"
              />
            </div>
            <button
              type="button"
              onClick={handleNext}
              className="w-full rounded-lg bg-teal-700 px-5 py-3 font-semibold text-white transition hover:bg-teal-800 focus:ring-4 focus:ring-teal-200"
            >
              Next →
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="mb-2 text-xl font-semibold text-gray-800">
              Your daily wellness
            </h2>
            <p className="mb-6 text-sm text-gray-600">
              Hello, {formData.name}! Tell us about your daily habits.
            </p>
            <div className="mb-5">
              <label htmlFor="sleep" className="mb-2 block text-sm font-medium text-gray-700">
                😴 Hours of sleep
              </label>
              <input
                id="sleep"
                type="number"
                name="sleep"
                value={formData.sleep}
                onChange={handleChange}
                placeholder="e.g. 8"
                min="0"
                max="24"
                step="0.5"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-200"
              />
              <p className="mt-1 text-xs text-gray-500">
                How many hours did you sleep?
              </p>
            </div>
            <div className="mb-8">
              <label htmlFor="water" className="mb-2 block text-sm font-medium text-gray-700">
                💧 Glasses of water
              </label>
              <input
                id="water"
                type="number"
                name="water"
                value={formData.water}
                onChange={handleChange}
                placeholder="e.g. 6"
                min="0"
                step="1"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-200"
              />
              <p className="mt-1 text-xs text-gray-500">
                How many glasses of water did you drink?
              </p>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleBack}
                className="w-1/2 rounded-lg border border-teal-700 px-5 py-3 font-semibold text-teal-800 transition hover:bg-teal-50"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-1/2 rounded-lg bg-teal-700 px-5 py-3 font-semibold text-white transition hover:bg-teal-800"
              >
                View Summary →
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <div className="mb-5 text-center text-5xl">🎉</div>
            <h2 className="mb-2 text-center text-2xl font-bold text-teal-800">
              Your Wellness Summary
            </h2>
            <p className="mb-6 text-center text-gray-600">
              Great job, {formData.name}! Here is your check-in.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg bg-teal-50 p-4">
                <span className="font-medium text-gray-700">Name</span>
                <span className="font-semibold text-teal-800">{formData.name}</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-teal-50 p-4">
                <span className="font-medium text-gray-700">Age</span>
                <span className="font-semibold text-teal-800">{formData.age} years</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-blue-50 p-4">
                <span className="font-medium text-gray-700">😴 Sleep</span>
                <span className="font-semibold text-blue-800">{formData.sleep} hours</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-cyan-50 p-4">
                <span className="font-medium text-gray-700">💧 Water</span>
                <span className="font-semibold text-cyan-800">{formData.water} glasses</span>
              </div>
            </div>
            <button
              type="button"
              onClick={handleBack}
              className="mt-8 w-full rounded-lg border border-teal-700 px-5 py-3 font-semibold text-teal-800 transition hover:bg-teal-50"
            >
              ← Back to Edit
            </button>
            <button
              type="button"
              onClick={() => {
                setFormData({ name: '', age: '', sleep: '', water: '' })
                setStep(1)
              }}
              className="mt-3 w-full rounded-lg bg-teal-700 px-5 py-3 font-semibold text-white transition hover:bg-teal-800"
            >
              Start Again
            </button>
          </div>
        )}

        <p className="mt-8 text-center text-xs text-gray-500">
          Small steps can make a difference to your well-being.
        </p>
      </div>
    </div>
  )
}
            <div className="mb-5 text-center text-5xl">🎉</div>
