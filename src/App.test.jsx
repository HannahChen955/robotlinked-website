import { Suspense } from 'react';

// Simple test component
const TestApp = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          RobotLinked Test
        </h1>
        <p className="text-xl text-gray-600">
          If you can see this, the basic React setup is working!
        </p>
        <div className="mt-8">
          <a href="/test" className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Test Button
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestApp;