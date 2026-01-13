import React, { useState } from 'react';

const CreateTeacherPosition = ({ onClose }) => {
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    description: '',
    status: 'Hoạt động',
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    onClose();
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">Tạo vị trí công tác</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-1">Mã *</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={formData.code}
            onChange={(e) => handleChange('code', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Tên *</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">Mô tả *</label>
          <textarea
            className="w-full border rounded px-3 py-2"
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Trạng thái *</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={formData.status}
            onChange={(e) => handleChange('status', e.target.value)}
          >
            <option value="Hoạt động">Hoạt động</option>
            <option value="Ngừng">Ngừng</option>
          </select>
        </div>
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

export default CreateTeacherPosition;