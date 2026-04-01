import { useState } from 'react';

const Form = ({ themNhanVien }) => {
  const [nvm, setNVM] = useState({
    id: '',
    ht: '',
    Email: '',
    sdt: '',
    vt: 'Nhân viên',
  });
  let error = {};
  const [Error, setError] = useState({});
  const validate = () => {
    const emailErr = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telErr = /^0[0-9]{9}$/;
    const nameErr = /^[a-zA-ZÀ-ỹ\s]+$/;
    if (!nvm.ht) error.name = 'Vui lòng nhập họ tên! ';
    else if (!nameErr.test(nvm.ht)) error.name = 'tên chỉ được có chữ cái!';
    if (!nvm.Email) error.email = 'Vui lòng nhập Email! ';
    else if (!emailErr.test(nvm.Email))
      error.email = 'Email phải đúng định dạng!';
    if (!nvm.sdt) error.tel = 'Vui lòng nhập số điện thoại! ';
    else if (!telErr.test(nvm.sdt))
      error.tel = 'số điện thoại phải bắt đầu bằng số 0 và có đủ 10 số!';
    setError(error);
    return Object.keys(error).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      error = {};
      setError({});
      themNhanVien(nvm);
      setNVM({ id: '', ht: '', Email: '', sdt: '', vt: 'Nhân viên' });
    } else {
      return;
    }
  };
  return (
    <>
      <h3>Phiếu Điền: </h3>
      <form onSubmit={handleSubmit} className="row g-6">
        <label>Họ tên: </label>
        <input
          value={nvm.ht}
          type="text"
          onChange={(e) => setNVM({ ...nvm, ht: e.target.value })}
        ></input>
        <span>{Error.name}</span>

        <label>Email </label>
        <input
          type="text"
          value={nvm.Email}
          onChange={(e) => setNVM({ ...nvm, Email: e.target.value })}
        ></input>
        <span>{Error.email}</span>
        <label>Số điện thoại </label>
        <input
          value={nvm.sdt}
          type="number"
          onChange={(e) => setNVM({ ...nvm, sdt: e.target.value })}
        ></input>
        <span>{Error.tel}</span>
        <label>Vị trí: </label>
        <select
          value={nvm.vt}
          onChange={(e) => setNVM({ ...nvm, vt: e.target.value })}
        >
          <option value="Nhân viên">Nhân viên</option>
          <option value="Quản lý">Quản lý</option>
          <option value="Giám đốc">Giám đốc</option>
        </select>
        <br></br>
        <br></br>
        <button type="submit">+ Thêm mới</button>
      </form>
    </>
  );
};
export default Form;
