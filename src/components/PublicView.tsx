import React from 'react';
import { MapPin, Clock, AlertTriangle } from 'lucide-react';

const PublicView = () => {
  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Public Information</h1>
        <p className="text-gray-600">Real-time city updates and alerts for citizens</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="col-span-full lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Current Traffic Status</h2>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Interactive traffic map coming soon</p>
            </div>
          </div>
        </div>

        <div className="col-span-full lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Active Alerts</h2>
            <div className="space-y-4">
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  <h3 className="text-sm font-medium text-yellow-800">Heavy Traffic Alert</h3>
                </div>
                <p className="mt-2 text-sm text-yellow-700">
                  Expect delays on Main Street due to road maintenance
                </p>
                <p className="mt-1 text-xs text-yellow-500">Updated 5 minutes ago</p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <h3 className="text-sm font-medium text-blue-800">Event Notice</h3>
                </div>
                <p className="mt-2 text-sm text-blue-700">
                  City Festival this weekend - expect increased foot traffic
                </p>
                <p className="mt-1 text-xs text-blue-500">Posted 2 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Report an Issue</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="issue-type" className="block text-sm font-medium text-gray-700">
                Issue Type
              </label>
              <select
                id="issue-type"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option>Traffic Congestion</option>
                <option>Road Maintenance</option>
                <option>Air Quality</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500">
                  <MapPin className="h-4 w-4" />
                </span>
                <input
                  type="text"
                  id="location"
                  className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter location or address"
                />
              </div>
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Describe the issue..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit Report
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Air Quality Index</h2>
          <div className="space-y-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100">
                <span className="text-3xl font-bold text-green-700">42</span>
              </div>
              <p className="mt-2 text-sm font-medium text-green-700">Good</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">PM2.5</span>
                <span className="font-medium text-gray-900">12 µg/m³</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">PM10</span>
                <span className="font-medium text-gray-900">25 µg/m³</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">NO2</span>
                <span className="font-medium text-gray-900">15 ppb</span>
              </div>
            </div>

            <div className="text-xs text-gray-500 text-center">
              Last updated: 5 minutes ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicView;