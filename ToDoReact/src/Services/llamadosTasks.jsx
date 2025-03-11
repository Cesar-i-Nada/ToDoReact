async function getTasks() {
    try {
        const response = await fetch('http://localhost:3000/tasks', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

export { getTasks };

//////////LLAMADO POST//////////

async function postTasks(Tarea) {
    try {
     
        const userData = { 
            
            Tarea
        
        };

        const response = await fetch("http://localhost:3000/tasks", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        
        return await response.json();

    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export{postTasks}

//////////////LLAMADO UPDATE/////////////


async function updateTasks(Tarea,id) 
{
    try {
     
        const userData = { 
            
            Tarea
        
        };


        


        const response = await fetch("http://localhost:3000/tasks/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

export{updateTasks}



//////////////LLAMADO DELETE/////////////


async function deleteTasks(id) {
    try {
        const response = await fetch(`http://localhost:3000/tasks/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }

        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

export { deleteTasks };