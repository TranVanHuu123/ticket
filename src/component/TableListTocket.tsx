import React from "react";

type Props = {};

const TableListTocket = (props: Props) => {
  return (
    <div className="max-w-[1567px] w-full">
      <div className="w-[1519px] mt-4 bg-white rounded-xl">
        <table className="w-full ">
          <thead>
            <tr>
              <th>STT</th>
              <th>Booking code</th>
              <th>Số vé</th>
              <th>Tên sự kiện</th>
              <th>Tình trạng sử dụng</th>
              <th>Ngày sử dụng </th>
              <th>Ngày xuất vé</th>
              <th>Cổng check - in</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>ALT20210501</td>
              <td>123456789034</td>
              <td>Hội chợ triển lãm tiêu dùng 2021</td>
              <td>Đã sử dụng</td>
              <td>14/04/2021</td>
              <td>14/04/2021</td>
              <td>Cổng 1</td>
            </tr>
            <tr>
              <td>2</td>
              <td>ALT20210501</td>
              <td>123456789034</td>
              <td>Hội chợ triển lãm tiêu dùng 2021</td>
              <td>Đã sử dụng</td>
              <td>14/04/2021</td>
              <td>14/04/2021</td>
              <td>Cổng 1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default TableListTocket;
