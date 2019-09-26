/**
 * ĐÂY LÀ NHỮNG GIÁ TRỊ MẶC ĐỊNH DÙNG CHUNG TRONG CẢ HỆ THỐNG
 * KHÔNG ĐƯỢC THAY ĐỔI NẾU KHÔNG ĐƯỢC PHÉP
 */

export namespace VARIABLES {
    export class ErrorMessage {
        static readonly MISSING_PARAM = 'thiếu tham số';
        static readonly NO_DATA = 'không tồn tại dữ liệu';
        static readonly NEED_COLUMN_IN = function (col_name: Array<string>, type: Array<string>, in_where: string) {
            let messages = [];
            for (let i = 0; i < col_name.length; i++) {
                messages.push(`cần ${col_name[i]} kiểu ${type[i]}`);
            }
            let message = messages.join(',');
            return `${message} trong ${in_where}`;
        }
        static readonly NO_DATA_WITH_ID = function (id) {
            return `không có dữ liệu tồn tại với id ${id}`;
        }
    }

    export class ValidatorMessage {
        static readonly IS_INT = 'phải là kiểu int';
        static readonly IS_STRING = 'phải là kiểu string';
        static readonly IS_FLOAT = 'phải là số thập phân';
        static readonly IS_BOOLEAN = 'phải là kiểu boolean';
        static readonly IS_DATE = 'giá trị phải thể hiện đúng giá trị thời gian';
        static readonly IS_ARRAY = 'giá trị phải là mảng';
        static readonly IS_IN_STANDARD_FORMAT = 'giá trị phải đúng theo format ten_cot+0(hoặc 1)[,ten_cot+0(hoặc 1)]';
        static readonly IS_IN_RANGE_OF_VALUE = 'phải là 1 trong các giá trị';
    }
}

