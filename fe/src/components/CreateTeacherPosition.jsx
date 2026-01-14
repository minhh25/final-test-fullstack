import React, { useState } from 'react';

const CreateTeacherPosition = ({ onClose }) => {
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    des: '',
    isActive: true,
  });

  const generateCode = (name) => {
    return name.split(' ') .map((word) => word[0]?.toUpperCase() || '') .join('');
  };

  const handleChange = (field, value) => {
    const updatedFormData = { ...formData, [field]: value };
    if (field === 'name') {
      updatedFormData.code = generateCode(value); // Automatically generate the code based on the name
    }
    setFormData(updatedFormData);
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch('http://localhost:8080/teacher-positions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        alert('Vị trí công tác mới đã được tạo thành công!');
        onClose();
      } else {
        alert(`Lỗi: ${data.message}`);
      }
    } catch (error) {
      console.error('Error creating teacher position:', error);
      alert('Đã xảy ra lỗi khi tạo vị trí công tác mới.');
    }
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
            readOnly // Make the code field read-only
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
            value={formData.des}
            onChange={(e) => handleChange('des', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Trạng thái *</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={formData.isActive ? 'Hoạt động' : 'Ngừng'}
            onChange={(e) => handleChange('isActive', e.target.value === 'Hoạt động')}
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