import React, { useState, useEffect } from 'react';

const ElevatorSimulator = () => {
  const [floor, setFloor] = useState(1); // 現在の階
  const [target, setTarget] = useState(null); // 目標階
  const [moving, setMoving] = useState(false); // 動いているか

  useEffect(() => {
    let timer;
    if (moving && floor < target) {
      timer = setTimeout(() => {
        setFloor(prev => prev + 1);
      }, 1000);
    } else if (floor === target) {
      setMoving(false);
      setTarget(null);
    }
    return () => clearTimeout(timer);
  }, [floor, moving, target]);

  const moveToFloor = (to) => {
    if (!moving && floor !== to) {
      setTarget(to);
      setMoving(true);
    }
  };

  return (
    <div className="p-4 border rounded-xl shadow-xl w-80 text-center space-y-4">
      <h1 className="text-xl font-bold">🚀 エレベーターシミュレーター</h1>
      <p className="text-2xl">現在の階: {floor}階</p>
      <button
        onClick={() => moveToFloor(18)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        18階へ移動
      </button>
      {moving && <p className="text-green-500">移動中...</p>}
    </div>
  );
};

export default ElevatorSimulator;
