# BudgetApp

Full site: https://lataniabudgetapp.herokuapp.com/. The home page design for this budget app is based on the mint budgeting ad website design.

Overall this is a responsive react app also using scss/sass for styling. Context API was used for managing the tracker state as well as local storage to maintain the state throughout page refreshes.

# What I Learned

In my other projects using react, I used redux for managing state so Context API was new to me. Although it was new, I was able to grasp the ideas quickly since they were similar in nature to redux. However I did struggle with localstorage and where to implement it since I used localstorage differently with redux. Eventually I discovered from a blog that it was easier to use a useEffect hook with localstorage in GlobalProvider and this solved my issues. 

I liked this project because typically when using react in my projects I have a backend portion using express and mongo but it was nice to just work with react on its own and explore it a bit further. 
