import { Modal } from 'antd';
import { IBaseProps, IDetail } from 'types';
import { CheckOutlined } from '@ant-design/icons';
import styles from 'styles/components/FeatureService.module.css';

interface IModalProps extends IBaseProps {
    data: IDetail & { price: string };
    visible: boolean;
    hideModal: (...args: any[]) => void;
}

export const DetailModal = (props: IModalProps) => {
    let { data, visible, hideModal } = props;

    const description = data?.description
        ? <div className="relative flex justify-between items-end">
            <span className="pr-20 font-light text-gray-400">{ data?.description }</span>

            <div className={ `${ styles['btn-check-circle'] } text-center rounded-full` }>
                <CheckOutlined className="text-lg text-white pt-0.5"/>
            </div>
        </div>
        : null;

    return <Modal
        visible={ visible }
        onOk={ hideModal }
        onCancel={ hideModal }
        footer={ null }
        closable={ false }
    >
        <div className={ `${ styles['modal-img'] } mb-4` }/>

        <div className="flex justify-between mb-4">
            <span className="text-lg font-bold">{ data?.name }</span>
            <span className="text-xl text-green-600">{ data?.price }</span>
        </div>

        { description }
    </Modal>
}
