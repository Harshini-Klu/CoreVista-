import React from "react";

export default function Submissions() {
  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-2">
        Submit Your Work on CoreVista
      </h1>
      <p className="text-center text-gray-500 mb-10">
        Upload your projects or documents to share with the community.
      </p>

      {/* Submission Form */}
      <div className="max-w-2xl mx-auto bg-white p-6 shadow-xl rounded-2xl">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            className="w-full p-3 border rounded-lg"
            required
          />
          <textarea
            placeholder="Description"
            rows="4"
            className="w-full p-3 border rounded-lg"
            required
          ></textarea>
          <select className="w-full p-3 border rounded-lg">
            <option>Blog</option>
            <option>Movie Recommandation</option>
            <option>News</option>
            <option>Jobs</option>
          </select>
          <input type="file" className="w-full p-3 border rounded-lg" />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
      {/* Recent Submissions */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-4">📂 Recent Submissions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Example Card */}
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="font-semibold text-lg">AI in Healthcare</h3>
            <p className="text-sm text-gray-500">Submitted by Anjali · May 10, 2025</p>
            <button className="mt-2 text-blue-600 hover:underline">Blog</button>
          </div>
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="font-semibold text-lg">Phalgam Terror Attack</h3>
            <p className="text-sm text-gray-500">Submitted by Sanjay · May 10, 2025</p>
            <button className="mt-2 text-blue-600 hover:underline">News</button>
          </div>
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="font-semibold text-lg">Top 10 Ideas for Hotel Bussiness</h3>
            <p className="text-sm text-gray-500">Submitted by Radha · May 1, 2025</p>
            <button className="mt-2 text-blue-600 hover:underline">Bussiness</button>
          </div>
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="font-semibold text-lg">Fundamentals for C</h3>
            <p className="text-sm text-gray-500">Submitted by Sheela · May 6, 2025</p>
            <button className="mt-2 text-blue-600 hover:underline">Education</button>
          </div>
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="font-semibold text-lg">Review on HIT 3</h3>
            <p className="text-sm text-gray-500">Submitted by Akhil · May 6, 2025</p>
            <button className="mt-2 text-blue-600 hover:underline">Entertainemnt</button>
          </div>
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="font-semibold text-lg">EduSkills offers Internships</h3>
            <p className="text-sm text-gray-500">Submitted by Bhuvanesh · May 10, 2025</p>
            <button className="mt-2 text-blue-600 hover:underline">JOb</button>
          </div>
          {/* Add more cards dynamically */}
        </div>
      </div>
    </div>
  );
}