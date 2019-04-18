/**
 * @class 자료구조 Stack class
 * @constructor
 */
SBStack = function ()
{
	this.m_arDataStore = [];
	this.top = 0;
	this.tag = 'softbowl:SBStack';
};

/**
 * Stack 자료구조의 복제본은 반환한다.
 * @type SBStack
 */
SBStack.prototype.clone = function(){
	var temp = new SBStack();
	temp.m_arDataStore = _.clone(this.m_arDataStore);
	temp.top = this.top;
	return temp;
};

/**
 * Stack 자료구조에 data를 추가한다.
 * @type void
 * @param {Object} data - 추가할 data
 */
SBStack.prototype.push = function (data)
{
	this.m_arDataStore[this.top++] = data;
	return this;
};

/**
 * Stack 자료구조에서 마지막 data를 삭제한다.
 * @type void
 */
SBStack.prototype.pop = function ()
{
	return this.m_arDataStore[this.top >= 1 ? --this.top : -1];
};

/**
 * Stack 자료구조에서 마지막 data를 반환한다.
 * @type void
 */
SBStack.prototype.peek = function ()
{
	return this.m_arDataStore[this.top - 1];
};

/**
 * Stack 자료구조의 data 수를 반환한다.
 * @type Number
 */
SBStack.prototype.length = function ()
{
	return this.top;
};

/**
 * Stack 자료구조의 data들을 모두 삭제한다.
 * @type void
 */
SBStack.prototype.clear = function ()
{
	this.m_arDataStore.clear();
	this.top = 0;
	return this;
};
