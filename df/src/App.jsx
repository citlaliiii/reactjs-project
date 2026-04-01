import React, { useState, useEffect } from 'react';
import { dsnhanvien } from './data';
import Form from './component/Form.jsx';
import HienThi from './component/Table.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [nhanviens, setNhanViens] = useState(() => {
    const lc = localStorage.getItem('staffData');
    return lc ? JSON.parse(lc) : dsnhanvien;
  });
  useEffect(() => {
    localStorage.setItem('staffData', JSON.stringify(nhanviens));
  }, [nhanviens]);
  function add(nvm) {
    const nvmWithID = { ...nvm, id: Date.now() };
    setNhanViens([...nhanviens, nvmWithID]);
  }
  const handleDelete = (id) => {
    setNhanViens(nhanviens.filter((nv) => (nv.id == id ? false : true)));
  };
  return (
    <>
      <div>
        <div>
          <h2>
            <strong>Quản lí nhân sự</strong>
          </h2>

          <menu>
            <button>Trang chủ</button>
            <button>Liên hệ</button>
          </menu>
        </div>

        <div>
          <input type="search"></input>
          <button>Tìm</button>
        </div>
      </div>
      <Form themNhanVien={add} />
      <div>
        <h2>Danh sách nhân sự</h2>
      </div>
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Vị Trí</th>
            <th colSpan={2}>Hành động</th>
          </tr>
        </thead>

        <HienThi nhanviens={nhanviens} onDelete={handleDelete} />
      </table>
    </>
  );
}
export default App;
