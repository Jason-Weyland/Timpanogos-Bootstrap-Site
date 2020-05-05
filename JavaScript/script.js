// Dropdown Menu
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

// nav join
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

// footer faq
$(function () {
    $("#footerFaq").click(function () {
        if ($("#linkMeet").hasClass("active")) {
            $("#tabMeet").removeClass("show active");
            $("#linkMeet").removeClass("active");
            $("#linkFaq").addClass("active");
            $("#tabFaq").addClass("show active");
        } else {
            if ($("#linkJoin").hasClass("active")) {
                $("#tabJoin").removeClass("show active");
                $("#linkJoin").removeClass("active");
                $("#linkFaq").addClass("active");
                $("#tabFaq").addClass("show active");
            } else {
                if ($("#linkAbout").hasClass("active")) {
                    $("#tabAbout").removeClass("show active");
                    $("#linkAbout").removeClass("active");
                    $("#linkFaq").addClass("active");
                    $("#tabFaq").addClass("show active");
                }
            }
        }
    });
});

// Footer Join
$(function () {
    $("#footerJoin").click(function () {
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

// paypal
paypal
    .Buttons({
        style: {
            shape: "rect",
            color: "blue",
            layout: "vertical",
            label: "paypal",
        },
        createOrder: function (data, actions) {
            return actions.order.create({
                purchase_units: [
                    {
                        amount: {
                            value: "15",
                        },
                    },
                ],
            });
        },
        onApprove: function (data, actions) {
            return actions.order.capture().then(function (details) {
                alert("Transaction completed by " + details.payer.name.given_name + "!");
            });
        },
    })
    .render("#paypal-button-container");
