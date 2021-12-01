const baseUrl = "http://localhost:3000/api/v1";
export const Shelter = {
  create(params) {
      return fetch(`${baseUrl}/shelters`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          credentials: "include",
          body: JSON.stringify(params)
      }).then(res => res.json())
  },

  destroy(sid){
    return fetch(`${baseUrl}/shelters/${sid}`, {
        method: 'DELETE',
        credentials: 'include',
    }).then(res => res.json())
}
}

export const Pet = {
    index(type) {
        return(
          fetch(`${baseUrl}/pets?type=${type}`)
          .then(res => res.json())
        )
    },
    show(pid) {
        return fetch(`${baseUrl}/pets/${pid}`)
            .then(res => res.json());
    },
    create(params) {
        return fetch(`${baseUrl}/pets`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(params)
        }).then(res => res.json())
    },
    destroy(pid){
      return fetch(`${baseUrl}/pets/${pid}`, {
        method: 'DELETE',
        credentials: 'include',
    }).then(res => res.json())
    }

}

//Sign In AJAX Helper
export const Session = {
    create(params) {
        return fetch(`${baseUrl}/session`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(params)
        }).then(res => res.json())
    },
    destroy(){
        return fetch(`${baseUrl}/session`, {
            method: 'DELETE',
            credentials: 'include',
        }).then(res => res.json())
    }
}

export const User = {
    current() {
        return fetch(`${baseUrl}/users/current`, {
            credentials: 'include'
        }).then(res => res.json())
    },
    create(params){
        return fetch(`${baseUrl}/users`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: params })
        }).then(res => res.json())
    }
}


