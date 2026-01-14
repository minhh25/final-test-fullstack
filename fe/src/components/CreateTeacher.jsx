import React, { useState, useEffect } from 'react';

const CreateTeacher = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    phone: '',
    email: '',
    cccd: '', 
    address: '',
    teacherPositionId: '',
    startDate: '',
    code: '',
    degrees: [],
  });
  const [teacherPositions, setTeacherPositions] = useState([]);

  useEffect(() => {
    fetchTeacherPositions();
  }, []);

  const fetchTeacherPositions = async () => {
    try {
      const res = await fetch('http://localhost:8080/teacher-positions');
      const data = await res.json();
      if (Array.isArray(data.data)) {
        setTeacherPositions(data.data);
      } else {
        console.error('Unexpected response format:', data);
      }
    } catch (error) {
      console.error('Error fetching teacher positions:', error);
    }
  };

  const addDegree = () => {
    setFormData({
      ...formData,
      degrees: [...formData.degrees, { type: '', school: '', major: '', year: '', isGraduated: false }],
    });
  };

  const updateDegree = (index, field, value) => {
    const updatedDegrees = [...formData.degrees];
    updatedDegrees[index][field] = value;
    setFormData({ ...formData, degrees: updatedDegrees });
  };

  const removeDegree = (index) => {
    const updatedDegrees = formData.degrees.filter((_, i) => i !== index);
    setFormData({ ...formData, degrees: updatedDegrees });
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch('http://localhost:8080/teachers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          identity: formData.cccd, // Map CCCD to identity
          dob: formData.birthDate, // Map birthDate to dob
        }),
      });
      const data = await res.json();
      if (res.ok) {
        alert('Giáo viên mới đã được tạo thành công!');
        onClose();
      } else {
        alert(`Lỗi: ${data.message}`);
      }
    } catch (error) {
      console.error('Error creating teacher:', error);
      alert('Đã xảy ra lỗi khi tạo giáo viên mới.');
    }
  };

  return (
    <div className="fixed top-0 right-0 w-1/3 h-full bg-white shadow-lg z-50 overflow-auto">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Tạo thông tin giáo viên</h2>
          <button className="text-gray-500" onClick={onClose}>
            X
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Họ và tên *</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Ngày sinh *</label>
            <input
              type="date"
              className="w-full border rounded px-3 py-2"
              value={formData.birthDate}
              onChange={(e) => handleChange('birthDate', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Số điện thoại *</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email *</label>
            <input
              type="email"
              className="w-full border rounded px-3 py-2"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Số CCCD *</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={formData.cccd}
              onChange={(e) => handleChange('cccd', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Địa chỉ *</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={formData.address}
              onChange={(e) => handleChange('address', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Mã giáo viên *</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={formData.code}
              onChange={(e) => handleChange('code', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Ngày bắt đầu *</label>
            <input
              type="date"
              className="w-full border rounded px-3 py-2"
              value={formData.startDate}
              onChange={(e) => handleChange('startDate', e.target.value)}
            />
          </div>
        </div>

        <h3 className="text-md font-bold mb-4">Thông tin công tác</h3>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Vị trí công tác *</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={formData.teacherPositionId}
            onChange={(e) => handleChange('teacherPositionId', e.target.value)}
          >
            <option value="">Chọn vị trí</option>
            {teacherPositions.map((position) => (
              <option key={position._id} value={position._id}>
                {position.name}
              </option>
            ))}
          </select>
        </div>

        <h3 className="text-md font-bold mb-4">Học vị</h3>
        <div className="mb-6">
          {formData.degrees.map((degree, index) => (
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
    </div>
  );
};

export default CreateTeacher;