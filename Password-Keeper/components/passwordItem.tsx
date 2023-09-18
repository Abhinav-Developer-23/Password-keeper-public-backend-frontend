import * as React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface ListItemProps {
  itemName: string;
  onTitleClick: (itemName: string) => void; // Add a string parameter
}

const ListItem: React.FC<ListItemProps> = (props) => {
  return (
    <div className="w-full">
      <Button
        variant="contained"
        style={{
          backgroundColor: 'beige',
          width: '100%',
          color: 'blue',
          fontWeight: 'bold',
        }}
        onClick={() => props.onTitleClick(props.itemName)} // Pass the itemName to the onTitleClick function
      >
        {props.itemName}
      </Button>
    </div>
  );
};

export default ListItem;
