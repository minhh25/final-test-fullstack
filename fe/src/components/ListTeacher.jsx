import React from 'react';

const ListTeacher = () => {
  const teachers = [
    {
      code: '1096169283',
      name: 'Trịnh Thị Thu Hương',
      email: 'huongtrinh@gmail.com',
      phone: '0357016576',
      degree: 'Bậc: Cử nhân',
      major: 'Chuyên ngành: Quản trị nhân lực',
      position: 'Hiệu phó, Giáo viên bộ môn',
      address: 'Huyện Yên Mô, Tỉnh Ninh Bình',
      status: 'Đang công tác',
    },
    {
      code: '0415678462',
      name: 'Trần Đăng Khoa',
      email: 'khoatrnpc@gmail.com',
      phone: '0353923603',
      degree: 'Bậc: Tiến sĩ',
      major: 'Chuyên ngành: Công Nghệ Thông Tin',
      position: 'Hiệu trưởng',
      address: 'Ninh Bình',
      status: 'Đang công tác',
    },
  ];

  return (
    <div className="p-6">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Mã</th>
            <th className="border border-gray-300 p-2">Giáo viên</th>
            <th className="border border-gray-300 p-2">Trình độ (cao nhất)</th>
            <th className="border border-gray-300 p-2">Bộ môn</th>
            <th className="border border-gray-300 p-2">TT Công tác</th>
            <th className="border border-gray-300 p-2">Địa chỉ</th>
            <th className="border border-gray-300 p-2">Trạng thái</th>
            <th className="border border-gray-300 p-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">{teacher.code}</td>
              <td className="border border-gray-300 p-2">
                <div className="flex items-center gap-2">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="Avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div>{teacher.name}</div>
                    <div className="text-sm text-gray-500">{teacher.email}</div>
                    <div className="text-sm text-gray-500">{teacher.phone}</div>
                  </div>
                </div>
              </td>
              <td className="border border-gray-300 p-2">
                <div>{teacher.degree}</div>
                <div className="text-sm text-gray-500">{teacher.major}</div>
              </td>
              <td className="border border-gray-300 p-2">N/A</td>
              <td className="border border-gray-300 p-2">{teacher.position}</td>
              <td className="border border-gray-300 p-2">{teacher.address}</td>
              <td className="border border-gray-300 p-2">
                <span className="bg-green-500 text-white px-2 py-1 rounded">
                  {teacher.status}
                </span>
              </td>
              <td className="border border-gray-300 p-2">
                <button className="text-indigo-700">Chi tiết</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTeacher;