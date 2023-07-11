function suspendService(num) {
        services.forEach((service) => {
          if (service.serviceNum == num) {
            const options = {
              method: 'POST',
              headers: {
                accept: 'application/json',
                authorization: 'Bearer rnd_mnZ1CcN0lVMv6surrhUb0uupsNsc'
              }
            };
            
            fetch('https://api.render.com/v1/services/'+ service.serviceId +'/suspend', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
          };
        });
      };
      function deleteService() {
        services.forEach((service) => {
          if (service.serviceNum == num) {
            const options = {
              method: 'DELETE',
              headers: {
                accept: 'application/json',
                authorization: 'Bearer rnd_mnZ1CcN0lVMv6surrhUb0uupsNsc'
              }
            };

            fetch('https://api.render.com/v1/services/' + service.serviceId, options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
          };
        });
      };
      function resumeService() {
        services.forEach((service) => {
          if (service.serviceNum == num) {
            const options = {
              method: 'POST',
              headers: {
                accept: 'application/json',
                authorization: 'Bearer rnd_mnZ1CcN0lVMv6surrhUb0uupsNsc'
              }
            };

            fetch('https://api.render.com/v1/services/'+ service.serviceId +'/resume', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
          };
        });
      };
      function restartService() {
        services.forEach((service) => {
          if (service.serviceNum == num) {
            const options = {
              method: 'POST',
              headers: {
                accept: 'application/json',
                authorization: 'Bearer rnd_mnZ1CcN0lVMv6surrhUb0uupsNsc'
              }
            };

            fetch('https://api.render.com/v1/services/' + service.serviceId + '/restart', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
          }
        });
      };
      function redeployService() {
        services.forEach((service) => {
          if (service.serviceNum == num) {
            const options = {
              method: 'POST',
              headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: 'Bearer rnd_mnZ1CcN0lVMv6surrhUb0uupsNsc'
              }
            };

            fetch('https://api.render.com/v1/services/'+ service.serviceId +'/deploys', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
          };
        });
      };
      function getStatus() {
        services.forEach((service) => {
          const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              authorization: 'Bearer rnd_mnZ1CcN0lVMv6surrhUb0uupsNsc'
            }
          };

          fetch('https://api.render.com/v1/services/' + service.serviceId, options)
          .then(response => response.json())
          .then(response => console.log(response))
          .catch(err => console.error(err));
        })
      }
