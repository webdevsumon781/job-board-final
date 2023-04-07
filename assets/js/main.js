// new job button start
document.querySelector('.newJobBtn').onclick = function () {
    document.querySelector(".jobField").classList.toggle("show");
    window.onclick = function (event) {
        if (!event.target.matches('.newJobBtn')) {
            var dropdowns = document.getElementsByClassName("jobField");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
}

// filter two start
document.querySelector('.toggleTwo').onclick = function () {
    document.querySelector(".filterContentTwo").classList.toggle("show");
    window.onclick = function (event) {
        if (!event.target.matches('.toggleTwo')) {
            var dropdowns = document.getElementsByClassName("filterContentTwo");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
}
// filtet tow close

// Search Icon and input filter start
document.querySelector('.inputFilter').onclick = function () {
    document.querySelector(".inputfilterContent").classList.toggle("taskShow");
    window.onclick = function (event) {
        if (!event.target.matches('.inputFilter')) {
            var dropdowns = document.getElementsByClassName("inputfilterContent");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('taskShow')) {
                    openDropdown.classList.remove('taskShow');
                }
            }
        }
    }
}

document.querySelector('.search').onclick = function () {
    document.querySelector(".searchIcon").classList.toggle("hide");
    window.onclick = function (event) {
        if (!event.target.matches('.search')) {
            var dropdowns = document.getElementsByClassName("searchIcon");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('hide')) {
                    openDropdown.classList.remove('hide');
                }
            }
        }
    }
}



//   Search Icon Close and  Input Filter close








// ******************************************************************************************

// accordion item one start
document.querySelector('.btn1').onclick = function () {
    document.querySelector(".btnContent1").classList.toggle("show");
}
document.querySelector('.btn2').onclick = function () {
    document.querySelector(".btnContent2").classList.toggle("show");
}
document.querySelector('.btn3').onclick = function () {
    document.querySelector(".btnContent3").classList.toggle("show");
}
document.querySelector('.btn4').onclick = function () {
    document.querySelector(".btnContent4").classList.toggle("show");
}
document.querySelector('.btn5').onclick = function () {
    document.querySelector(".btnContent5").classList.toggle("show");
}
document.querySelector('.btn6').onclick = function () {
    document.querySelector(".btnContent6").classList.toggle("show");
}
// accordion item one close
// accordion item two start
document.querySelector('.btn6').onclick = function () {
    document.querySelector(".btnContent6").classList.toggle("show1");
}
document.querySelector('.btn7').onclick = function () {
    document.querySelector(".btnContent7").classList.toggle("show1");
}
document.querySelector('.btn8').onclick = function () {
    document.querySelector(".btnContent8").classList.toggle("show1");
}
document.querySelector('.btn9').onclick = function () {
    document.querySelector(".btnContent9").classList.toggle("show1");
}
document.querySelector('.btn10').onclick = function () {
    document.querySelector(".btnContent10").classList.toggle("show1");
}
// accordion item two close
// accordion item 3 start
document.querySelector('.btn11').onclick = function () {
    document.querySelector(".btnContent11").classList.toggle("show1");
}
document.querySelector('.btn12').onclick = function () {
    document.querySelector(".btnContent12").classList.toggle("show1");
}
document.querySelector('.btn13').onclick = function () {
    document.querySelector(".btnContent13").classList.toggle("show1");
}
document.querySelector('.btn14').onclick = function () {
    document.querySelector(".btnContent14").classList.toggle("show1");
}
document.querySelector('.btn15').onclick = function () {
    document.querySelector(".btnContent15").classList.toggle("show1");
}
// accordion item 3 close
// accordion item 4 start
document.querySelector('.btn16').onclick = function () {
    document.querySelector(".btnContent16").classList.toggle("show1");
}
document.querySelector('.btn17').onclick = function () {
    document.querySelector(".btnContent17").classList.toggle("show1");
}
document.querySelector('.btn18').onclick = function () {
    document.querySelector(".btnContent18").classList.toggle("show1");
}
document.querySelector('.btn19').onclick = function () {
    document.querySelector(".btnContent19").classList.toggle("show1");
}
document.querySelector('.btn20').onclick = function () {
    document.querySelector(".btnContent20").classList.toggle("show1");
}
// accordion item 4 close
// accordion item 5 start
document.querySelector('.btn21').onclick = function () {
    document.querySelector(".btnContent21").classList.toggle("show1");
}
document.querySelector('.btn22').onclick = function () {
    document.querySelector(".btnContent22").classList.toggle("show1");
}
document.querySelector('.btn23').onclick = function () {
    document.querySelector(".btnContent23").classList.toggle("show1");
}
document.querySelector('.btn24').onclick = function () {
    document.querySelector(".btnContent24").classList.toggle("show1");
}
document.querySelector('.btn25').onclick = function () {
    document.querySelector(".btnContent25").classList.toggle("show1");
}
// accordion item 5 close

// *******************************************************************************************
// rating filter start

// let btn = document.querySelectorAll('.ratingFilter');
// for (let i = 0; i < btn.length; i++) {
//     let btns = btn[i];
//     btns.onclick = function () {
//         let btn = document.querySelectorAll('.action');
//         for (let i = 0; i < btn.length; i++){
//             let btns = btn[i];
//             btns.classList.toggle("show");
//         }
//     }
// }

document.querySelector('.ratingFilter1').onclick = function () {
    document.querySelector(".filterContent1").classList.toggle("show");
    document.querySelector(".taskDesOne").classList.toggle("taskShow");
}
document.querySelector('.ratingFilter2').onclick = function () {
    document.querySelector(".filterContent2").classList.toggle("show");
    document.querySelector(".taskDes2").classList.toggle("taskShow");
}
document.querySelector('.ratingFilter3').onclick = function () {
    document.querySelector(".filterContent3").classList.toggle("show");
    document.querySelector(".taskDes3").classList.toggle("taskShow");
}
document.querySelector('.ratingFilter4').onclick = function () {
    document.querySelector(".filterContent4").classList.toggle("show");
    document.querySelector(".taskDes4").classList.toggle("taskShow");
}
document.querySelector('.ratingFilter5').onclick = function () {
    document.querySelector(".filterContent5").classList.toggle("show");
    document.querySelector(".taskDes5").classList.toggle("taskShow");
}
// item two**************************************************************************
document.querySelector('.ratingFilter6').onclick = function () {
    document.querySelector(".filterContent6").classList.toggle("show");
     document.querySelector(".taskDes6").classList.toggle("taskShow");
}
document.querySelector('.ratingFilter7').onclick = function () {
    document.querySelector(".filterContent7").classList.toggle("show");
     document.querySelector(".taskDes7").classList.toggle("taskShow");
}
document.querySelector('.ratingFilter8').onclick = function () {
    document.querySelector(".filterContent8").classList.toggle("show");
     document.querySelector(".taskDes8").classList.toggle("taskShow");
}
document.querySelector('.ratingFilter9').onclick = function () {
    document.querySelector(".filterContent9").classList.toggle("show");
     document.querySelector(".taskDes9").classList.toggle("taskShow");
}
document.querySelector('.ratingFilter10').onclick = function () {
    document.querySelector(".filterContent10").classList.toggle("show");
     document.querySelector(".taskDes10").classList.toggle("taskShow");
}
// item three**************************************************************************
document.querySelector('.ratingFilter11').onclick = function () {
    document.querySelector(".filterContent11").classList.toggle("show");
     document.querySelector(".taskDes11").classList.toggle("taskShow");
}
document.querySelector('.ratingFilter12').onclick = function () {
    document.querySelector(".filterContent12").classList.toggle("show");
    document.querySelector(".taskDes12").classList.toggle("taskShow");
}
document.querySelector('.ratingFilter13').onclick = function () {
    document.querySelector(".filterContent13").classList.toggle("show");
    document.querySelector(".taskDes13").classList.toggle("taskShow");
}
document.querySelector('.ratingFilter14').onclick = function () {
    document.querySelector(".filterContent14").classList.toggle("show");
    document.querySelector(".taskDes14").classList.toggle("taskShow");
}
document.querySelector('.ratingFilter15').onclick = function () {
    document.querySelector(".filterContent15").classList.toggle("show");
    document.querySelector(".taskDes15").classList.toggle("taskShow");
}
// item four**************************************************************************
document.querySelector('.ratingFilter16').onclick = function () {
    document.querySelector(".filterContent16").classList.toggle("show");
    document.querySelector(".taskDes16").classList.toggle("taskShow");
}
document.querySelector('.ratingFilter17').onclick = function () {
    document.querySelector(".filterContent17").classList.toggle("show");
    document.querySelector(".taskDes17").classList.toggle("taskShow");
}
document.querySelector('.ratingFilter18').onclick = function () {
    document.querySelector(".filterContent18").classList.toggle("show");
    document.querySelector(".taskDes18").classList.toggle("taskShow");
}
document.querySelector('.ratingFilter19').onclick = function () {
    document.querySelector(".filterContent19").classList.toggle("show");
    document.querySelector(".taskDes19").classList.toggle("taskShow");
}
document.querySelector('.ratingFilter20').onclick = function () {
    document.querySelector(".filterContent20").classList.toggle("show");
    document.querySelector(".taskDes20").classList.toggle("taskShow");
}
// item five**************************************************************************
document.querySelector('.ratingFilter21').onclick = function () {
    document.querySelector(".filterContent21").classList.toggle("show");
    document.querySelector(".taskDes21").classList.toggle("taskShow");
}
document.querySelector('.ratingFilter22').onclick = function () {
    document.querySelector(".filterContent22").classList.toggle("show");
    document.querySelector(".taskDes22").classList.toggle("taskShow");
}
document.querySelector('.ratingFilter23').onclick = function () {
    document.querySelector(".filterContent23").classList.toggle("show");
    document.querySelector(".taskDes23").classList.toggle("taskShow");
}
document.querySelector('.ratingFilter24').onclick = function () {
    document.querySelector(".filterContent24").classList.toggle("show");
    document.querySelector(".taskDes24").classList.toggle("taskShow");
}
document.querySelector('.ratingFilter25').onclick = function () {
    document.querySelector(".filterContent25").classList.toggle("show");
    document.querySelector(".taskDes25").classList.toggle("taskShow");
}

// Close the dropdown if the user clicks outside of it
// rating filter close
// *******************************************************************************************
// add task button start
// add task start
function addTaskOne() {
    document.querySelector(".taskContent").classList.toggle("taskContentShow");
    window.onclick = function (event) {
        if (!event.target.matches('.addTaskBtn')) {
            var dropdowns = document.getElementsByClassName("taskContent");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('taskContentShow')) {
                    openDropdown.classList.remove('taskContentShow');
                }
            }
        }
    }
}


document.querySelector('.addTaskBtn2').onclick = function () {
    document.querySelector(".taskContent2").classList.toggle("taskContentShow");
    window.onclick = function (event) {
        if (!event.target.matches('.addTaskBtn2')) {
            var dropdowns = document.getElementsByClassName("taskContent2");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('taskContentShow')) {
                    openDropdown.classList.remove('taskContentShow');
                }
            }
        }
    }
}

document.querySelector('.addTaskBtn3').onclick = function () {
    document.querySelector(".taskContent3").classList.toggle("taskContentShow");
    window.onclick = function (event) {
        if (!event.target.matches('.addTaskBtn3')) {
            var dropdowns = document.getElementsByClassName("taskContent3");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('taskContentShow')) {
                    openDropdown.classList.remove('taskContentShow');
                }
            }
        }
    }
}
document.querySelector('.addTaskBtn4').onclick = function () {
    document.querySelector(".taskContent4").classList.toggle("taskContentShow");
    window.onclick = function (event) {
        if (!event.target.matches('.addTaskBtn4')) {
            var dropdowns = document.getElementsByClassName("taskContent4");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('taskContentShow')) {
                    openDropdown.classList.remove('taskContentShow');
                }
            }
        }
    }
}
document.querySelector('.addTaskBtn5').onclick = function () {
    document.querySelector(".taskContent5").classList.toggle("taskContentShow");
    window.onclick = function (event) {
        if (!event.target.matches('.addTaskBtn5')) {
            var dropdowns = document.getElementsByClassName("taskContent5");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('taskContentShow')) {
                    openDropdown.classList.remove('taskContentShow');
                }
            }
        }
    }
}
// add task close
// add task button close













