/**
 * @class 자료구조 Queue class
 * @constructor
 */
SBQueue = function ()
{
	this.m_arDataStore = [];
	this.tag = 'softbowl:SBQueue';
};

/**
 * Queue 자료구조의 복제본은 반환한다.
 * @type SBQueue
 */
SBQueue.prototype.clone = function(){
	var temp = new SBQueue();
	temp.m_arDataStore = _.clone(this.m_arDataStore);
	return temp;
};

/**
 * Queue 자료구조에 data를 추가한다.
 * @type void
 * @param {Object} data - 추가할 data
 */
SBQueue.prototype.enqueue = function (data)
{
	/*The enqueue() function adds an element to the end of a queue.*/
	this.m_arDataStore.push(data);
	return this;
};

/**
 * Queue 자료구조에서 첫 번째 data를 삭제하고 삭제한 데이터를 반환한다.
 * @type Object
 */
SBQueue.prototype.dequeue = function ()
{
	/*The dequeue() function removes an element from the front of a queue.*/
	return this.m_arDataStore.shift();
};

/**
 * Queue 자료구조에서 첫 번째 data를 반환한다.
 * @type Object
 */
SBQueue.prototype.front = function ()
{
	return this.m_arDataStore[0];
};

/**
 * Queue 자료구조에서 마지막 data를 반환한다.
 * @type Object
 */
SBQueue.prototype.back = function ()
{
	return this.m_arDataStore[this.m_arDataStore.length - 1];
};

/**
 * Queue 자료구조 내 data 존재 여부를 확인한다.
 * @type Boolean
 */
SBQueue.prototype.empty = function ()
{
	if (this.m_arDataStore.length == 0)
		return true;
	else
		return false;
};

/**
 * Queue 자료구조 내 data들을 모두 삭제한다.
 * @type void
 */
SBQueue.prototype.clear = function ()
{
	while(this.dequeue()){};
	return this;
};
