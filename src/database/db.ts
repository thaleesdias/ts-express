
import fs from 'node:fs'

export interface Task {
    id: string,
    title: string,
    description: string,
    completed_at: null | string,
    created_at: string,
    updated_at: string
}

export class Database {
    #tasks: Task[] = []

    create(task: Task) {

        const task2 = JSON.stringify(task)

        // function fufu(): Boolean {
        //     return true
        // }

        // fs.writeFileSync('dados.txt', task2)

        this.#tasks.push(task)

    }

    list(){
        return this.#tasks
    }

    update(id: string, newTask: Task) {

    }
    delete(id:string){
        this.#tasks = this.#tasks.filter(task => task.id !== id )

    }

    deleteAll(){
        this.#tasks = []
    }
}