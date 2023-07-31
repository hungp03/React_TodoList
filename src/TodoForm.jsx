import { ListItem, TextField, InputAdornment, IconButton } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import Create from "@mui/icons-material/Create";

export default function TodoForm({ addTodo }) {
    const { handleSubmit, control, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        addTodo(data.text);
        reset({ text: '' });
    }
    return (
        <ListItem>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="text"
                    control={control}
                    defaultValue={''}
                    rules={{ required: 'This field is required' }}
                    render={({ field }) => (
                        //console.log(field);
                        <TextField sx={{width: '100%'}}
                            {...field}
                            id="outlined-basic"
                            label="Add Todo"
                            variant="outlined"
                            error={!!errors.text}
                            helperText={errors.text ? errors.text.message : ""}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="create todo"
                                            edge="end"
                                            type="submit">
                                            <Create />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    )}
                />
            </form>
        </ListItem >
    )
}
