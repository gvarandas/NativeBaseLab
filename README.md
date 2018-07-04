# NativeBaseLab

## Sample Project used to debug the PR to the "Item" component of the "Native Base" library.

* [Related Issue](https://github.com/GeekyAnts/NativeBase/issues/2011)
* [Fix Pull Request](https://github.com/GeekyAnts/NativeBase/pull/2001)

---

## SETUP

> `npm install` or `yarn`


> `npm start` or `yarn start`

---

## PROBLEM

The problem was to use a Higher Order Component (HOC) inside an Item component, which would originally replace every child with a new "Item" instance, killing the HOC properties.


## SOLUTION
The proposed fix is to simply clone the children elements, retaining the original aspects while injecting the needed new props.