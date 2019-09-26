import { default as swal } from 'sweetalert2';

export class Alert {
    public static showDeleteAlertWithCancel(title: string, text: string): Promise<void> {
        return swal({
            title: title,
            text: text,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Không'
        })
    }
}