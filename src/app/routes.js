        <Routes>
          <Route path="/" element={
            <motion.section
              className="glass-hero"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
            </motion.section>
          } />
          <Route path="/tournaments" element={
            <motion.section
              className="glass-section"
              id="tournaments-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Upcoming Tournaments</h2>
              <div className="tournaments-container"></div>
            </motion.section>
          } />

          <Route path="/teams" element={
            <motion.section
              className="glass-section"
              id="teams-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Top Teams</h2>
              <div className="teams-container"></div>
            </motion.section>
          } />

          <Route path="/players" element={
            <motion.section
              className="glass-section"
              id="players-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Featured Players</h2>
              <div className="players-container"></div>
            </motion.section>
          } />

          <Route path="/news" element={
            <motion.section
              className="glass-section"
              id="news-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Latest News</h2>
              <div className="news-container"></div>
            </motion.section>
          } />

          <Route path="/about" element={
            <motion.section
              className="glass-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2>About</h2>
              <p>Learn more about our esports company.</p>
            </motion.section>
          } />

          <Route path="/contact" element={
            <motion.section
              className="glass-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Contact</h2>
              <p>Contact us for inquiries or support.</p>
            </motion.section>
          } />
        </Routes>