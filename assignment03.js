//khởi tạo lớp
class Student {
    constructor(name, gender, markSub01, markSub02) {
        this.$name = name
        this.$gender = gender
        this.$markSub01 = markSub01
        this.$markSub02 = markSub02
        this.$mark = (this.$markSub01 + this.$markSub02)/2 //Điểm trung bình tích luỹ
        this.$subjects = [
            {Title: "Math", Mark: this.$markSub01},
            {Title: "Physical", Mark: this.$markSub02}
        ]
    }
    get name(){
        return this.$name
    }
    set name(newName){
        return this.$name = newName
    }
    get mark(){
        return this.$mark
    }
    //mark sẽ bị thay đỏi theo subject nên không cần hàm set
    get gender(){
        return this.$gender
    }
    set  gender(newGender){
        return this.$gender = newGender
    }
    get subjects(){
        return this.$subjects
    }
    set subjects(newSubject){
        return this.$subjects = newSubject
    }
    showInfo(){
        return `Name: ${this.name}, Mark: ${this.mark}`;
    }
}

// Tạo danh sách sinh viên
var studentArray = []

//thêm giá trị đã nhập vào lớp
function addValue(){
    let i = studentArray.length
    let name = document.getElementById("name").value
    let gender = document.getElementById("gender").value
    let markSub01 = Number(document.getElementById("markSub01").value)
    let markSub02 = Number(document.getElementById("markSub02").value)
    //thêm vào mảng studentArray
    studentArray.push(new Student(name, gender, markSub01, markSub02))
    createRow(studentArray[i].$name, studentArray[i].$gender, studentArray[i].$mark, studentArray[i].$markSub01, studentArray[i].$markSub02)
    i++
}

//in ra kết quả sau xử lý ra bảng
function returnResTable(arrayInput){
    deleteAllRow()
    for (let i = 0; i < arrayInput.length; i++) {
        createRow(arrayInput[i].$name, arrayInput[i].$gender, arrayInput[i].$mark, arrayInput[i].$markSub01, arrayInput[i].$markSub02)
    }
}

//thêm một dòng vào bảng
function createRow(name, gender, mark, markSub01, markSub02) {
    let table = document.getElementById("resTable")
    // insertRow(số thứ tự của hàng); bắt đầu từ 0, nhập -1 để thêm vào hàng cuối cùng
    let row = table.insertRow(-1)
    row.insertCell(0).innerHTML = name
    row.insertCell(1).innerHTML = gender
    row.insertCell(2).innerHTML = markSub01
    row.insertCell(3).innerHTML = markSub02
    row.insertCell(4).innerHTML = mark
}

//lau bảng
function deleteAllRow(){
    let table = document.getElementById("resTable")
    for(var i = table.rows.length - 1; i > 0; i--){
      table.deleteRow(i)
    }
}

//xóa bớt 1 hàng cuối
function deleteLastRow(){
    if((document.getElementById("resTable").rows.length) > 1 ){
        document.getElementById("resTable").deleteRow(-1)
        studentArray.shift(studentArray.length)
    }
}

//tạo nhanh 10 thành viên trong lớp
function quickCreStudent(){
    studentArray[0]= new Student('Nguyễn Duy Tiến', 'Nam', 0, 0)
    studentArray[1]= new Student('Trương Minh Cương', 'Nữ', 10, 8)
    studentArray[2]= new Student('Bùi Trần Nhân Tài', 'Nam', 0, 9)
    studentArray[3]= new Student('Phạm Thị Tố Uyên', 'Nữ', 9, 8)
    studentArray[4]= new Student('Nguyễn Anh Tuấn', 'Nam', 10, 10)
    studentArray[5]= new Student('Ngọc Trinh', 'Nữ', 6, 3)
    returnResTable(studentArray)
}

//sắp xếp điểm tích lũy từ bé đến lớn
function ascendingSort(arrayInput){
    this.$array = arrayInput
    this.$array.sort((numberA, numberB) => {return numberA.$mark - numberB.$mark})
    return this.$array
}

//sắp xếp điểm tích lũy từ lớn đến bé
function desendingSort(arrayInput){
    this.$array = arrayInput
    this.$array.sort((numberA, numberB) => {return numberB.$mark - numberA.$mark})
    return this.$array
}

//lọc giới tính
function filterGender(arrayInput, genderInput){
    this.$array = arrayInput.filter((item) => item.$gender == genderInput)
    return this.$array
}

//lọc điểm trung bình tích lỹ > markInput
function filterMark(arrayInput, markInput){
    this.$array = arrayInput.filter((item) => item.$mark > markInput)
    return this.$array
}

//lọc theo giới tính và điểm trung bình tích lũy > markInput
function filterGenderMark(arrayInput, genderInput, markInput){
    this.$array = arrayInput.filter((item) => ((item.$gender == genderInput) && (item.$mark > markInput)))
    return this.$array
}

//lọc theo subject mark 01 || subject mark 02 > điểm truyền vào
function filterSubMark(arrayInput, markInput){
    this.$array = arrayInput.filter((item) => ((item.$subjects[0].Mark > markInput) || (item.$subjects[1].Mark > markInput)))
    return this.$array
}

//tìm ai có điểm môn subject index cao nhất
function findMaxSubMark(arrayInput, subIndex){
    let max = -Infinity
    this.$array = []
    //tìm điểm cao nhất
    for (let i = 0; i < arrayInput.length; i++) {
        if (arrayInput[i].$subjects[subIndex].Mark > max) {
            max = arrayInput[i].$subjects[subIndex].Mark
        }
    }
    //tìm những người cùng có điểm cao nhất
    for (let i = 0; i < arrayInput.length; i++) {
        if (arrayInput[i].$subjects[subIndex].Mark == max) {
            this.$array.push(arrayInput[i])
        }
    }
    return this.$array
}

//tìm ai có điểm subject index thấp nhất
function findMinSubMark(arrayInput, subIndex){
    let min = Infinity
    this.$array = []
    //tìm điểm thấp nhất
    for (let i = 0; i < arrayInput.length; i++) {
        if (arrayInput[i].$subjects[subIndex].Mark < min) {
            min = arrayInput[i].$subjects[subIndex].Mark
        }
    }
    //tìm những người cùng có điểm thấp nhất
    for (let i = 0; i < arrayInput.length; i++) {
        if (arrayInput[i].$subjects[subIndex].Mark == min) {
            this.$array.push(arrayInput[i])
        }
    }
    return this.$array
}

// xóa khỏi danh sách những người có điểm trung bình tích lũy dưới mark input
function removeStudent(arrayInput, markInput){
    studentArray = filterMark(arrayInput, markInput)
    return studentArray
}

//dùng hàm này để reset 
function resetPage(){
    location.reload()
}

