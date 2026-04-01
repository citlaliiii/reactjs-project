function HienThi({ nhanviens, onDelete }) {
  console.log('nhanviens: ', nhanviens);
  return (
    <tbody>
      {nhanviens.map((nhanvien, index) => (
        <tr key={nhanvien.id}>
          <td>{index + 1}</td>
          <td>{nhanvien.ht}</td>
          <td>{nhanvien.Email}</td>
          <td>{nhanvien.sdt}</td>
          <td>{nhanvien.vt}</td>
          <td>
            <button> Sửa</button>
            <button onClick={() => onDelete(nhanvien.id)}> Xóa</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
export default HienThi;
