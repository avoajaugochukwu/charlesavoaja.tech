# JavaScript Call, Bind Apply for dummies

I just sat for an online test for a senior front-end developer. And one of the main areas I was tested on was JavaScripts’ `call()`, `bind()` `apply()`.

If you want to level up your game as a serious JavaScript developer, you must learn these methods. Then, you can kick and scream that you have never seen it used in a project 😅. Yes, I agree with you, but tests and interviews are frequently based on them.

Oh, and about the test, I didn't do well.

In this article, I will do my best to explain call, bind and apply most simply.

Before you can learn about call, bind and apply, you need some understanding of `this` keyword in JavaScript.

### What is `this`?

`this` is a keyword in JavaScript whose value is determined by how the function is called (runtime binding). Therefore, it can't be set by assignment during execution, and it may be different each time the function is called.

Let’s consider the following code blocks:

```jsx
const toyota = {
	brand: "Toyota",
	printName: function () {
		console.log(this.brand)
	}
}

toyota.printName()
// expected output: "Toyota"

```

In the statement above, `printName` returns ‘Toyota’, because at run time, the context of `this` keyword in `printName` is the object `toyota`. 

Let us expand another example:

```jsx
const toyota = {
	brand: "Toyota",
	printName: function() {
		console.log(this.brand)
	},
	mazda: {
		brand: "Mazda",
		printName: function() {
			console.log(this.brand)
		}
	}
}

toyota.printName()
// expected output: "Toyota"

toyota.mazda.printName()
// expected output: "Mazda"
```

What is happening here?

`toyota.mazda.printName()` prints ‘Mazda’ because the context of `this` at runtime, is related to the nested `mazda` object.

When JavaScript encounters `this` keyword at runtime, it checks  if there is a definition for `this` within that context. In the code above, the relevant `this.brand` is found in `mazda`.

What if `mazda` doesn't contain a definition for `brand`, then `toyota.mazda.printName()` will print `undefined`. Remember that the binding happens at runtime, and at runtime, `mazda` doesn't have a `this.brand`.

You must be wondering how `this` is relevant to `call()`, `bind()` and `apply()`.

`this` is relevant to call, bind and apply, because they are all about providing flexibility to how `this` is assigned, by allowing you to choose the context you want to apply to a function.

## What is call, bind and apply

Consider the code below:

```jsx
function myPowerSource(source1, source2) {
	console.log(`My name is ${this.model}, I run on ${source1} or ${source2}`)
}

const honda = {
	model: "Honda",
	year: 2019
}

const powerSources = ['Electricity', 'Gasoline']

// call
myPowerSource.call(honda, powerSources[0], powerSources[1])
// expected output: "My name is Honda, I run on Electricity or Gasoline"

// apply
myPowerSource.apply(honda, powerSources)
// expected output: "My name is Honda, I run on Electricity or Gasoline"

// bind
const runLater = myPowerSource.bind(honda, powerSources[0], powerSources[1])

runLater()
// expected output: "My name is Honda, I run on Electricity or Gasoline"
```

As I stated above, `call()`, `bind()` and `apply()` give you flexibility on how `this` is assigned.

Now let us go over each of them.

### call

The `call()` method calls a function with a given `this` value and arguments provided individually. In our case, the object `honda` is `this` context. `myPowerSource` can be called with any object that has the model property.

### apply

The `apply()` method calls a function with a given `this` value, and `arguments` are provided as an array. Providing the arguments as an array is the **only** **difference** between `call()` and `apply()`

Let us take a look at `call()` and `apply()` used earlier:

```jsx
const powerSources = ['Electricity', 'Gasoline']

// call
myPowerSource.call(honda, powerSources[0], powerSources[1])
// expected output: "My name is Honda, I run on Electricity or Gasoline"

// apply
myPowerSource.apply(honda, powerSources)
// expected output: "My name is Honda, I run on Electricity or Gasoline"
```

The only difference is that `apply()` accepts an array as its second argument, while `call()` accepts individual arguments.

### bind

The `bind()` method is similar to the `call()` method, it allows you to specify `this` context. The only difference is that it creates a new function that is executed later. 

So if the function will be executed instantly, there is no need of using `bind()`, just use `call()`. But if the function will be executed at a later point, then you should use `bind()`.

I hope you have an idea of what `call()`, `bind()` and `apply()` methods do. You should be able to answer questions about them. 

In interviews or tests, the code might be convoluted, but the main idea is the same. Determine where or what `this` context is and you can easily solve any questions.