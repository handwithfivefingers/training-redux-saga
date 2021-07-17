Nguyên tắc về Seat picker.
-1: Seat lấy từ state và trả về array
-2: Trong State bao gồm : 
    this.state = {
      seat: [ 1,2,3,4,5,6 ],
      seatAvailable: [ 1,2,3,4,5,6],
      seatReserved: [],
    }
-3: Component bao gồm : 
    - Main component :
      - Thực hiện chức năng load state và handle Change
      - Truyền State ....
      - handle Event từ DrawGrid component truyền về thực hiện việc thay đổi state seatAvailable/ seatReserved
    - DrawGrid component :
      - Lấy dữ liệu props từ Main component truyền vào và load thành this.props.seat -> map.
      - Handle click khi action từ người dùng truyền về Main component bao gồm this.props.seatAvailable và this.props.seatReserved
    

