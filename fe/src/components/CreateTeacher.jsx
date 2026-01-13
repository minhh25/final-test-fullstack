import React, { useState } from 'react';

const CreateTeacher = ({ onClose }) => {
  const [degrees, setDegrees] = useState([]);

  const addDegree = () => {
    setDegrees([...degrees, { type: '', school: '', major: '', year: '', isGraduated: false }]);
  };

  const updateDegree = (index, field, value) => {
    const updatedDegrees = [...degrees];
    updatedDegrees[index][field] = value;
    setDegrees(updatedDegrees);
  };

  const removeDegree = (index) => {
    const updatedDegrees = degrees.filter((_, i) => i !== index);
    setDegrees(updatedDegrees);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    onClose();
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">Tạo thông tin giáo viên</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-1">Họ và tên *</label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Ngày sinh *</label>
          <input type="date" className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Số điện thoại *</label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email *</label>
          <input type="email" className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Số CCCD *</label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Địa chỉ *</label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>
      </div>

      <h3 className="text-md font-bold mb-4">Thông tin công tác</h3>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">Vị trí công tác *</label>
        <select className="w-full border rounded px-3 py-2">
          <option value="CBYT">CBYT - Cán Bộ Y Tế</option>
          <option value="GVBM">GVBM - Giáo viên bộ môn</option>
          <option value="HT">HT - Hiệu trưởng</option>
        </select>
      </div>

      <h3 className="text-md font-bold mb-4">Học vị</h3>
      <div className="mb-6">
        {degrees.map((degree, index) => (
          <div key={index} className="grid grid-cols-5 gap-4 mb-4">
            <input
              type="text"
              placeholder="Bậc"
              className="border rounded px-3 py-2"
              value={degree.type}
              onChange={(e) => updateDegree(index, 'type', e.target.value)}
            />
            <input
              type="text"
              placeholder="Trường"
              className="border rounded px-3 py-2"
              value={degree.school}
              onChange={(e) => updateDegree(index, 'school', e.target.value)}
            />
            <input
              type="text"
              placeholder="Chuyên ngành"
              className="border rounded px-3 py-2"
              value={degree.major}
              onChange={(e) => updateDegree(index, 'major', e.target.value)}
            />
            <input
              type="number"
              placeholder="Năm"
              className="border rounded px-3 py-2"
              value={degree.year}
              onChange={(e) => updateDegree(index, 'year', e.target.value)}
            />
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={degree.isGraduated}
                onChange={(e) => updateDegree(index, 'isGraduated', e.target.checked)}
              />
              <span>Hoàn thành</span>
            </div>
            <button
              className="text-red-500"
              onClick={() => removeDegree(index)}
            >
              Xóa
            </button>
          </div>
        ))}
        <button className="bg-indigo-500 text-white px-4 py-2 rounded" onClick={addDegree}>
          Thêm
        </button>
      </div>

      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        Lưu
      </button>
      <button
        className="bg-gray-300 text-black px-4 py-2 rounded ml-2"
        onClick={onClose}
      >
        Hủy
      </button>
    </div>
  );
};

export default CreateTeacher;