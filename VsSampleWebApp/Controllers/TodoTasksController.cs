using VsSampleWebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace VsSampleWebApp.Controllers
{
    public class TodoTasksController : ApiController
    {
        public static TodoTask[] TodoTasks = 
        {
            new TodoTask(){ Title="Learn asp.net Web Api", Completed=true},
            new TodoTask(){ Title="Learn AngularJS", Completed=false},
            new TodoTask(){ Title="Mix AngularJS and asp.net Web api", Completed=true}
        };

        public TodoTask[] Get()
        {
            return TodoTasks;
        }

        public void Put(TodoTask[] values)
        {
            TodoTasks = values;
        }
    }
}