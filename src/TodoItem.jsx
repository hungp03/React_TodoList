import { ListItem, ListItemButton, ListItemText, ListItemIcon, Checkbox, IconButton} from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export default function TodoItem({ val , remove, handleToggle}) {
    const labelId = `checkbox-list-label-${val.id}`;
    
    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="comments" onClick={remove}>
                    <DeleteOutlinedIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined} dense onChange={handleToggle}>
                <ListItemIcon>
                    <Checkbox
                        color='success'
                        edge="start"
                        checked={val.completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={val.text} />
            </ListItemButton>
        </ListItem>
    );
}