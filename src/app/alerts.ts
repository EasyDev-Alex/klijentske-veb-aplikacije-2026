import Swal from "sweetalert2";

export class Alerts {
    static success(text: string) {
        Swal.fire({
            title: "Success!",
            text,
            icon: "success"
        });
    }

    static error(text: string) {
        Swal.fire({
            title: "Error!",
            text,
            icon: "error"
        });
    }

    static confirm(title: string, text: string, callback: Function) {
        Swal.fire({
            title,
            text,
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                callback()
            }
        })
    }
}