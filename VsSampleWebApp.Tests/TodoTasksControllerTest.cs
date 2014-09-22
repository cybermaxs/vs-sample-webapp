using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using VsSampleWebApp.Controllers;
using System.Net.Http;
using System.Web.Http;

namespace VsSampleWebApp.Tests
{
    [TestClass]
    public class TodoTasksControllerTest
    {
        [TestMethod]
        public void GetDefaultTasks()
        {
            // Arrange
            var controller = new TodoTasksController();
            controller.Request = new HttpRequestMessage();
            controller.Configuration = new HttpConfiguration();

            // Act
            var response = controller.Get();

            // Assert
            Assert.IsNotNull(response);
            Assert.AreEqual(3, response.Length);
        }

        [TestMethod]
        public void PutTask()
        {
            //// Arrange
            //var controller = new TodoTasksController();
            //controller.Request = new HttpRequestMessage();
            //controller.Configuration = new HttpConfiguration();

            //// Act
            //var response = controller.Put()

            //// Assert
            //Assert.IsNotNull(response);
            //Assert.AreEqual(3, response.Length);
        }
    }
}
