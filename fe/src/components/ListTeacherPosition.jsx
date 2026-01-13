import React from 'react';

const ListTeacherPosition = () => {
  const positions = [
    { id: 1, code: 'TTS', name: 'Thực tập sinh', description: 'Giáo viên thực tập sinh tại trường', status: 'Hoạt động' },
    { id: 2, code: 'GVBM', name: 'Giáo viên bộ môn', description: 'Giáo viên bộ môn giảng dạy tại trường', status: 'Hoạt động' },
    { id: 3, code: 'TBM', name: 'Trưởng bộ môn', description: 'Trưởng bộ môn giảng dạy tại trường', status: 'Hoạt động' },
    { id: 4, code: 'HT', name: 'Hiệu trưởng', description: 'Hiệu trưởng tại trường học', status: 'Hoạt động' },
    { id: 5, code: 'HP', name: 'Hiệu phó', description: 'Phó hiệu trưởng tại trường học', status: 'Hoạt động' },
    { id: 6, code: 'CBYT', name: 'Cán Bộ Y Tế', description: 'Hỗ trợ công việc Y Tế', status: 'Hoạt động' },
  ];

  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-2">STT</th>
          <th className="border border-gray-300 p-2">Mã</th>
          <th className="border border-gray-300 p-2">Tên</th>
          <th className="border border-gray-300 p-2">Trạng thái</th>
          <th className="border border-gray-300 p-2">Mô tả</th>
          <th className="border border-gray-300 p-2">Hành động</th>
        </tr>
      </thead>
      <tbody>
        {positions.map((position) => (
          <tr key={position.id}>
            <td className="border border-gray-300 p-2">{position.id}</td>
            <td className="border border-gray-300 p-2">{position.code}</td>
            <td className="border border-gray-300 p-2">{position.name}</td>
            <td className="border border-gray-300 p-2">
              <span className="bg-green-500 text-white px-2 py-1 rounded">{position.status}</span>
            </td>
            <td className="border border-gray-300 p-2">{position.description}</td>
            <td className="border border-gray-300 p-2">
              <button className="text-indigo-700">Chi tiết</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListTeacherPosition;
