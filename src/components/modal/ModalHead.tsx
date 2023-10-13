import { FC } from 'react';
import IconButton from '../buttons/IconButton';
import CloseIcon from '../icons/CloseIcon';
import QuestionIcon from '../icons/QuestionIcon';

interface IProps {
  onClose?: () => void;
}

const ModalHead: FC<IProps> = props => {
  const { onClose } = props;

  // Renders
  return (
    <div className="flex items-center justify-between p-4 gap-4">
      <IconButton onClick={onClose} icon={<CloseIcon />} />

      <div className="text-center">
        <h2 className="text-base md:text-lg color-black font-medium mb-1">Adjust Photo</h2>
        <p className="text-sm md:text-base font-normal text-secondary-dark">Adjust the photo to fill the outline</p>
      </div>

      <IconButton icon={<QuestionIcon />} />
    </div>
  );
};

export default ModalHead;
