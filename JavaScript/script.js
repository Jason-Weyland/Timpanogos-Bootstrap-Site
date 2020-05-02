$(function () {
    $("#dropMeet").click(function () {
        if ($("#linkAbout").hasClass("active")) {
            $("#tabAbout").removeClass("show active");
            $("#linkAbout").removeClass("active");
            $("#linkMeet").addClass("active");
            $("#tabMeet").addClass("show active");
        } else {
            if ($("#linkFaq").hasClass("active")) {
                $("#tabFaq").removeClass("show active");
                $("#linkFaq").removeClass("active");
                $("#linkMeet").addClass("active");
                $("#tabMeet").addClass("show active");
            } else {
                if ($("#linkJoin").hasClass("active")) {
                    $("#tabJoin").removeClass("show active");
                    $("#linkJoin").removeClass("active");
                    $("#linkMeet").addClass("active");
                    $("#tabMeet").addClass("show active");
                }
            }
        }
    });
});

$(function () {
    $("#dropAbout").click(function () {
        if ($("#linkMeet").hasClass("active")) {
            $("#tabMeet").removeClass("show active");
            $("#linkMeet").removeClass("active");
            $("#linkAbout").addClass("active");
            $("#tabAbout").addClass("show active");
        } else {
            if ($("#linkFaq").hasClass("active")) {
                $("#tabFaq").removeClass("show active");
                $("#linkFaq").removeClass("active");
                $("#linkAbout").addClass("active");
                $("#tabAbout").addClass("show active");
            } else {
                if ($("#linkJoin").hasClass("active")) {
                    $("#tabJoin").removeClass("show active");
                    $("#linkJoin").removeClass("active");
                    $("#linkAbout").addClass("active");
                    $("#tabAbout").addClass("show active");
                }
            }
        }
    });
});

$(function () {
    $("#dropFaq").click(function () {
        if ($("#linkMeet").hasClass("active")) {
            $("#tabMeet").removeClass("show active");
            $("#linkMeet").removeClass("active");
            $("#linkFaq").addClass("active");
            $("#tabFaq").addClass("show active");
        } else {
            if ($("#linkAbout").hasClass("active")) {
                $("#tabAbout").removeClass("show active");
                $("#linkAbout").removeClass("active");
                $("#linkFaq").addClass("active");
                $("#tabFaq").addClass("show active");
            } else {
                if ($("#linkJoin").hasClass("active")) {
                    $("#tabJoin").removeClass("show active");
                    $("#linkJoin").removeClass("active");
                    $("#linkFaq").addClass("active");
                    $("#tabFaq").addClass("show active");
                }
            }
        }
    });
});

$(function () {
    $("#dropJoin").click(function () {
        if ($("#linkMeet").hasClass("active")) {
            $("#tabMeet").removeClass("show active");
            $("#linkMeet").removeClass("active");
            $("#linkJoin").addClass("active");
            $("#tabJoin").addClass("show active");
        } else {
            if ($("#linkFaq").hasClass("active")) {
                $("#tabFaq").removeClass("show active");
                $("#linkFaq").removeClass("active");
                $("#linkJoin").addClass("active");
                $("#tabJoin").addClass("show active");
            } else {
                if ($("#linkAbout").hasClass("active")) {
                    $("#tabAbout").removeClass("show active");
                    $("#linkAbout").removeClass("active");
                    $("#linkJoin").addClass("active");
                    $("#tabJoin").addClass("show active");
                }
            }
        }
    });
});

$(function () {
    $("#navJoin").click(function () {
        if ($("#linkMeet").hasClass("active")) {
            $("#tabMeet").removeClass("show active");
            $("#linkMeet").removeClass("active");
            $("#linkJoin").addClass("active");
            $("#tabJoin").addClass("show active");
        } else {
            if ($("#linkFaq").hasClass("active")) {
                $("#tabFaq").removeClass("show active");
                $("#linkFaq").removeClass("active");
                $("#linkJoin").addClass("active");
                $("#tabJoin").addClass("show active");
            } else {
                if ($("#linkAbout").hasClass("active")) {
                    $("#tabAbout").removeClass("show active");
                    $("#linkAbout").removeClass("active");
                    $("#linkJoin").addClass("active");
                    $("#tabJoin").addClass("show active");
                }
            }
        }
    });
});

// $(function () {
//     $(".card-deck")
//         .children("#presidentCard")
//         .mouseover(function () {
//             $("#presidentCard").removeClass("border-succeses");
//             $("#presidentCard").addClass("border-warning");
//         });
// });

// $(function () {
//     $("#dropMeet").click(function () {
//         $("#linkAbout").removeClass("active");
//         $("#linkMeet").addClass("active");
//         $("#tabAbout").removeClass("show active");
//         $("#tabMeet").addClass("show active");
//     });
// });

// $(function () {
//     $("#btnAbout").click(function () {
//         $("#aboutTab").addClass("active show");
//     });
//     $("#btnMeet").click(function () {
//         $("#officerTab").addClass("show active");
//     });
//     $("#btnFaq").click(function () {
//         $("#faqTab").addClass("show active");
//     });
//     $("#btnMember").click(function () {
//         $("#joinTab").addClass("show active");
//     });
// });

// var image = document.getElementsByClassId("flowStone");
// new simpleParallax(image, {
//     scale: 1.5,
//     orientation: "down",
// });

// btnAbout
// btnMeet
// btnFaq
// btnMember
// aboutTab
// officerTab
// faqTab
// joinTab
