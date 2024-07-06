import React, { useState } from 'react';

const Dashboard = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [candidates, setCandidates] = useState([]);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const newCandidates = files.map((file, index) => ({
      id: index,
      name: file.name.replace(/\.[^/.]+$/, ""),
      score: Math.floor(Math.random() * 100)
    }));
    setCandidates(newCandidates);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">The Paper Store Hiring Dashboard</h1>
          <div className="bg-white text-blue-600 rounded-full w-12 h-12 flex items-center justify-center font-bold">
            TPS
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Job Description Input */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Job Description</h2>
                <textarea
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  rows="4"
                  placeholder="Enter job description..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                ></textarea>
              </div>
            </div>

            {/* Resume Upload */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Upload Resumes</h2>
                <input
                  type="file"
                  multiple
                  className="w-full text-gray-700 px-3 py-2 border rounded-lg"
                  onChange={handleFileUpload}
                />
              </div>
            </div>

            {/* Candidate List */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Candidates</h2>
                {candidates.length > 0 ? (
                  <ul className="divide-y divide-gray-200">
                    {candidates.map(candidate => (
                      <li key={candidate.id} className="py-4 flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-900">{candidate.name}</span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Score: {candidate.score}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No candidates uploaded yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default () => <Dashboard />;