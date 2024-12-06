import React from 'react';
import { useRouter } from 'next/router';

const TableChildren = ({
  data, // Renamed from 'children' to 'data'
}: {
  data: Array<{ id: string; name: string; grade: string; usage: string; progress: string }>;
}) => {
  const router = useRouter(); // Define the router here

  return (
    <div>
      {/* Table format for larger screens */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Grade
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Usage
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Progress
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
            {data.map((child) => (
              <tr key={child.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">
                  {child.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">{child.grade}</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">{child.usage}</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">{child.progress}</td>
                <td className="px-6 py-4 text-sm text-right">
                  <button
                    className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
                    onClick={() => router.push(`/childrenprogress/${child.id}`)}
                  >
                    View Progress
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Stacked format for smaller screens */}
      <div className="block lg:hidden mt-4">
        {data.map((child) => (
          <div key={child.id} className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <div className="p-4">
              <p className="font-semibold text-gray-900 dark:text-gray-100">{child.name}</p>
              <p className="text-gray-600 dark:text-gray-300">Grade: {child.grade}</p>
              <p className="text-gray-600 dark:text-gray-300">Usage: {child.usage}</p>
              <p className="text-gray-600 dark:text-gray-300">Progress: {child.progress}</p>
              <button
                className="mt-2 text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
                onClick={() => router.push(`/childrenprogress/${child.id}`)} // Use router.push here
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableChildren;
