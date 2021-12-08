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
  },
  index() {
      return(
        fetch(`${baseUrl}/shelters`)
        .then(res => res.json())
      )
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
            // headers: {
            //     "Content-Type": "application/json"
            // },
            credentials: "include",
            body: params
        }).then(res => res.json())
    },
    destroy(pid){
      return fetch(`${baseUrl}/pets/${pid}`, {
        method: 'DELETE',
        credentials: 'include',
    }).then(res => res.json())
    }

}

export const Survey = {
    index(params, type) {
        return(
          fetch(`${baseUrl}/pets/survey_index?type=${type}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(params)
          })
          .then(res => res.json())
        )
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

export const Like = {
    index() {
        return(
          fetch(`${baseUrl}/likes`,{
              method: 'GET',
              credentials: 'include',
          })
          .then(res => res.json())
          )
      },
    create(pet_id) {
        return fetch(`${baseUrl}/pets/${pet_id}/likes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
        }).then(res => res.json())
    },
    destroy(id){
      return fetch(`${baseUrl}/likes/${id}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
    },
    
    is_liked(pet_id) {
      return(
        fetch(`${baseUrl}/pets/${pet_id}/show_like`,{
            method: 'GET',
            credentials: 'include',
        })
        .then(res => res.json())
        )
    }
}





