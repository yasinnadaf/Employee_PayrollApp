//UC4-A

window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
})
function createInnerHtml() {
    const headerHtml = `<tr><th></th><th>Name</th><th>Gender</th><th>Department</th>
            <th>Salary</th><th>start Date</th><th>Actions</th></tr>`
    const innerHtml = `${headerHtml}
 <tr>
 <td><img src="..//assets/profile-images/Ellipse -9.png" class="profile" width="30px" alt=""></td>
        <td> Aviv Samson</td>
        <td>Male</td>
        <td>
        <div class="dept-label">Sales</div>
        <div class="dept-label">HR</div>
        </td>
        <td>300000</td>
        <td>21 May 2020</td>
        <td>
        <img id="1" onclick="remove(this)" alt="delete" width="30px"
               src="../assets/icons/delete-black-18dp.svg">
        <img id="1" onclick="update(this)" alt="edit" width="30px"
               src="../assets/icons/create-black-18dp.svg">
        </td>
        </tr>
        <tr>
        <td><img src="../assets/profile-images/Ellipse -4.png" class="profile" width="30px" alt=""></td>
        <td>Savi patil</td>
        <td>Female</td>
        <td>
        <div class="dept-label">Engineer</div>
        <div class="dept-label">HR</div>
        </td>
        <td>400000</td>
        <td>20 Nov 2019</td>
        <td>
        <img id="1" onclick="remove(this)" alt="delete" width="30px"
               src="../assets/icons/delete-black-18dp.svg">
        <img id="1" onclick="update(this)" alt="edit" width="30px"
               src="../assets/icons/create-black-18dp.svg">
    </td>
    </tr>`
    document.querySelector('#display').innerHTML = innerHtml
}