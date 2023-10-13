import Button from '../buttons/Button';
import IconButton from '../buttons/IconButton';
import LandscapeIcon from '../icons/LandscapeIcon';
import MinusIcon from '../icons/MinusIcon';
import PlusIcon from '../icons/PlustIcon';

const ModalFooter = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-5">
        <div className="items-center hidden sm:flex">
          <IconButton icon={<MinusIcon />} />
          <IconButton icon={<PlusIcon />} />
        </div>

        <IconButton icon={<LandscapeIcon />} className="-mt-2" />
      </div>

      <Button>Accept</Button>
    </div>
  );
};

export default ModalFooter;
