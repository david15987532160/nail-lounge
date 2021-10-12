import { EnvironmentOutlined } from '@ant-design/icons';

export const CheckinIcon = (props: any) => {
    return <span
        className="w-10 h-10 absolute bottom-full left-1/2 -ml-5 mb-2 flex justify-center items-center bg-red-600 border border-white rounded-full"
    >
        <EnvironmentOutlined className="pb-0.5 text-lg text-black"/>
    </span>;
};
